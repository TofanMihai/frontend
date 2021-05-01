import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class FighterDataService
{
    retrieveAllFighters()
    {
        return axios.get(`${API_URL}/fightersList`);
    }

    createFighter(fighter)
    {
        return axios.post(`${API_URL}/fightersTable`, fighter);
    }
}

export default new FighterDataService()