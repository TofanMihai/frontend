import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class FighterDataService
{
    getFighters()
    {
        return axios.get(`${API_URL}/fightersList`);
    }

    insertFighter(fighter)
    {
        return axios.post(`${API_URL}/fightersTable`, fighter);
    }

    updateFighters(startingDate)
    {
        return axios.put(`${API_URL}/updateFighters/${startingDate}`);
    }

    getArrivalTestDate()
    {
        return axios.get(`${API_URL}/getArrivalTestDate`)
    }

    sendArrivalTestDate(arrivalTestDate)
    {
        return axios.post(`${API_URL}/sendArrivalTestDate/${arrivalTestDate}`)
    }
}

export default new FighterDataService()