import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class EventDataService
{
    getEvents()
    {
        return axios.get(`${API_URL}/eventsList`);
    }

    generateEvents(startingDate, tournamentType)
    {
        return axios.post(`${API_URL}/eventsTable/${startingDate}/${tournamentType}`)
    }

    resetWeek()
    {
        return axios.put(`${API_URL}/resetWeek`)
    }

    nextWeek(startingDate)
    {
        return axios.post(`${API_URL}/eventsTable/next/${startingDate}`)
    }

    previousWeek(startingDate)
    {
        return axios.post(`${API_URL}/eventsTable/previous/${startingDate}`)
    }
}

export default new EventDataService()