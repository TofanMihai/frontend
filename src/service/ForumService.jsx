import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class EventDataService
{
    getEvents()
    {
        return axios.get(`${API_URL}/eventsList`);
    }
}

export default new EventDataService()