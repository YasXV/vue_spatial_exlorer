import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 1000,

});

export const getCharacters = async(page) => {
    try{
        const response = await apiClient.get(`/character?page=${page}`);
        console.log("teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest");
        console.log(response.data);
        console.log(response.data.results);
        return response.data;   
    }
    catch(error){
        console.error("Error for getting characters",error);
    }
};

export const getLocations = async() => {
    try{
        const response = await apiClient.get('/location');
        return response.data.results;
    }
    catch(error){
        console.error("Error for getting Locations",error);
    }
};

export const getEpisodes = async() => {
    try{
        const response = await apiClient.get('/episode');
        return response.data.results;
    }
    catch(error){
        console.error("Error for getting episodes",error);
    }
};
export default apiClient;