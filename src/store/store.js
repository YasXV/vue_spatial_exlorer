import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
    getCharacters as getCharactersApi, 
    getEpisodes as getEpisodesApi, 
    getLocations as getLocationsApi, 
    getNbPages 
} from '@/api/apicall';

export const useRickMortyStore = defineStore("rickMortyStore", () => {
    const characters = ref([]);
    const locations = ref([]);
    const episodes = ref([]);
    const onePageCharacters = ref([]);
    const onePageLocations = ref([]);
    const onePageEpisodes = ref([]);
    const currentPageCharacter = ref(1);
    const totalPagesCharacter = ref(1);
    const currentPageLocation = ref(1);
    const totalPagesLocation = ref(1);
    const currentPageEpisode = ref(1);
    const totalPagesEpisode = ref(1);

    const getCharacters = computed(() => characters.value);
    const getLocations = computed(() => locations.value);
    const getEpisodes = computed(() => episodes.value);
    const getCurrentPageCharacter = computed(() => currentPageCharacter.value);
    const getTotalPagesCharacter = computed(() => totalPagesCharacter.value);
    const getOnePageCharacters = computed(() => onePageCharacters.value);

    async function fetchCharacters(actualPageC = 1) {
        try {
            const data = await getCharactersApi(actualPageC);
            console.log("Data receivedDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD:", data); // Ajoute ce log pour voir si l'API renvoie des données
            onePageCharacters.value = data; // Assure-toi que `data` contient `results`
            console.log("ONE pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAge", onePageCharacters.value);
            currentPageCharacter.value = actualPageC;
        } catch (error) {
            console.error("Error fetching characters", error);
        }
    }
    

    async function fetchEpisodes(actualPageE = 1) {
        try {
            onePageEpisodes.value = await getEpisodesApi(actualPageE);
            currentPageEpisode.value = actualPageE;
        } catch (error) {
            console.error("Error fetching episodes", error);
        }
    }

    async function fetchLocations(actualPageL = 1) {
        try {
            onePageLocations.value = await getLocationsApi(actualPageL);
            currentPageLocation.value = actualPageL;
        } catch (error) {
            console.error("Error fetching locations", error);
        }
    } 

    async function fetchNumberPages(element) {
        if (!["character", "location", "episode"].includes(element)) {
            console.error("Error: element is not valid");
            return;
        }

        try {
            if (element === "character") {
                totalPagesCharacter.value = await getNbPages(element);
            } else if (element === "location") {
                totalPagesLocation.value = await getNbPages(element);
            } else if (element === "episode") {
                totalPagesEpisode.value = await getNbPages(element);
            }
        } catch (error) {
            console.error("Error fetching number of pages", error);
        }
    }

    async function fetchEverything() {
        try {
            onePageCharacters.value = await getCharactersApi();
            onePageEpisodes.value = await getEpisodesApi();
            onePageLocations.value = await getLocationsApi();
        } catch (error) {
            console.error("Error fetching everything", error);
        }
    }

    function deadOrAlive(status) {
        if (status === "Alive") return "status-alive";
        if (status === "Dead") return "status-dead";
        return "status-unknown";
    }

    return {
        characters,
        onePageCharacters,
        currentPageCharacter,
        totalPagesCharacter,
        getCharacters,
        getTotalPagesCharacter,
        getOnePageCharacters,
        getCurrentPageCharacter,
        fetchNumberPages,
        fetchCharacters,
        fetchEpisodes,
        fetchLocations,
        fetchEverything,
        deadOrAlive
    };
});
