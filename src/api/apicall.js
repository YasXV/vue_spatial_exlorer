import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 2000,

});

export const getCharacters = async(page) => {
    try{
        const response = await apiClient.get(`/character?page=${page}`);
        return response.data.results;   
    }
    catch(error){
        console.error("Error for getting characters",error);
    }
};

export const getLocations = async(page) => {
    try{
        const response = await apiClient.get(`/location?page=${page}`);
        return response.data.results;
    }
    catch(error){
        console.error("Error for getting Locations",error);
    }
};

export const getEpisodes = async(page) => {
    try{
        const response = await apiClient.get(`/episode?page=${page}`);
        return response.data.results;
    }
    catch(error){
        console.error("Error for getting episodes",error);
    }
};

export const getNbPages = async(element) =>{
    if(element!=="character" && element!=="location" && element!=="episode"){
        console.error("Error: element is not valid");
        return;
    }

    try{
        const response = await apiClient.get(`/${element}`);
        return response.data.info.pages;
    }
    catch(error){
        console.error("Error for getting number of pages",error);
    }
}

export const getAllCharacters = async() => {
    let characters = [];
    let nbPages = await getNbPages("character");
    for(let i=1;i<=nbPages;i++){
        try{
            const response = await getCharacters(i);
            characters = characters.concat(response);
        }
        catch(error){
            console.error("Error for getting all characters",error);
        }
    }
    return characters;
}

export const getAllLocations = async() => {
    let locations = [];
    let nbPages = await getNbPages("location");
    for(let i=1;i<=nbPages;i++){
        try{
            const response = await getLocations(i);
            locations = locations.concat(response);
        }
        catch(error){
            console.error("Error for getting all locations",error);
        }
    }
    return locations;
}

export const getAllEpisodes = async() => {
    let episodes = [];
    let nbPages = await getNbPages("episode");
    for(let i=1;i<=nbPages;i++){
        try{
            const response = await getEpisodes(i);
            episodes = episodes.concat(response);
        }
        catch(error){
            console.error("Error for getting all episodes",error);
        }
    }
    return episodes;
}

export const getALL = async() => {
    // return an object with 3 keys: characters, locations and episodes
    return {
        characters: await getAllCharacters(),
        locations: await getAllLocations(),
        episodes: await getAllEpisodes(),
    }
}

export default apiClient;