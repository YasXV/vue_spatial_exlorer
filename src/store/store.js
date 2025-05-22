import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { 
    getCharacters as getCharactersApi, 
    getEpisodes as getEpisodesApi, 
    getLocations as getLocationsApi, 
    getAllEpisodes, getAllCharacters, getAllLocations,
    getNbPages, getALL
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
    const everything = ref({});
    /*const searchQuery = ref("");
    const numberResults = ref(0);
    const isLoaded = ref(false);*/

    const getCharacters = computed(() => characters.value);
    const getEverything = computed(() => everything.value);
    const getLocations = computed(() => locations.value);
    const getEpisodes = computed(() => episodes.value);
    const getCurrentPageCharacter = computed(() => currentPageCharacter.value);
    const getTotalPagesCharacter = computed(() => totalPagesCharacter.value);
    const getOnePageCharacters = computed(() => onePageCharacters.value);
    const getCurrentPageLocation = computed(() => currentPageLocation.value);
    const getTotalPagesLocation = computed(() => totalPagesLocation.value);
    const getOnePageLocations = computed(() => onePageLocations.value);
    const getCurrentPageEpisode = computed(() => currentPageEpisode.value);
    const getTotalPagesEpisode = computed(() => totalPagesEpisode.value);
    const getOnePageEpisodes = computed(() => onePageEpisodes.value);

    async function fetchCharacters(actualPageC = 1) {
        try {
            const data = await getCharactersApi(actualPageC);
            console.log("Data receivedDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD:", data); 
            onePageCharacters.value = data; 
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

    async function fetchAllEpisodes() {
        try {
            episodes.value = await getAllEpisodes();
            console.log("🔍 Episodes:", episodes.value);
        } catch (error) {
            console.error("Error fetching episodes", error);
        }
        
    }

    async function fetchAllCharacters() {
        try {
            characters.value = await getAllCharacters();
            console.log("🔍 Characters:", characters.value);
        } catch (error) {
            console.error("Error fetching characters", error);
        }        
    }

    async function fetchAllLocations() {
        try {
            locations.value = await getAllLocations();
            console.log("🔍 Locations:", locations.value);
        } catch (error) {
            console.error("Error fetching locations", error);
        }        
    }

    async function fetchEverything() {
        try {
            everything.value = await getALL();
            console.log("🔍 Everything:", everything.value.characters);
           
        } catch (error) {
            console.error("Error fetching everything", error);
        }
    }

    //Everytime the searchQuery changes, we update the search results and filter them depending on the query
    /*const filter = computed(() => {

        if (!searchQuery.value.trim() || isLoaded==false) return ["poutou"];
        const query = searchQuery.value.trim().toLowerCase();

        let results = [...everything.value.characters.filter(character => character.name.toLowerCase().includes(query)),
            ...everything.value.locations.filter(location => location.name.toLowerCase().includes(query)),
            ...everything.value.episodes.filter(episode => episode.name.toLowerCase().includes(query))
        ];
        return results;       
    });*/

    //Every time the search query changes, the number of results is updated
   /* watch(filter, (newResults) => {
        numberResults.value = newResults.length;
    });

    // update the search query
    function updateSearchQuery(newQuery){
        searchQuery.value = newQuery;  
    };*/



    function deadOrAlive(status) {
        if (status === "Alive") return "status-alive";
        if (status === "Dead") return "status-dead";
        return "status-unknown";
    }

    return {
        characters,
        locations,
        episodes,
        onePageEpisodes,
        onePageLocations,
        onePageCharacters,
        currentPageCharacter,
        totalPagesCharacter,
        getCharacters,
        getEverything,
        getLocations,
        getEpisodes,
        getTotalPagesCharacter,
        getOnePageCharacters,
        getCurrentPageCharacter,
        getCurrentPageLocation,
        getTotalPagesLocation,
        getOnePageLocations,
        getCurrentPageEpisode,
        getTotalPagesEpisode,
        getOnePageEpisodes,
        fetchNumberPages,
        fetchAllEpisodes,
        fetchAllCharacters,
        fetchAllLocations,
        fetchCharacters,
        fetchEpisodes,
        fetchLocations,
        fetchEverything,
        deadOrAlive,
    };
});
