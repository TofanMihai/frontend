import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class CovidTestDataService
{
    getCovidTests()
    {
        return axios.get(`${API_URL}/covidtestsList`);
    }

    insertCovidTest(covidTest)
    {
        return axios.post(`${API_URL}/covidtestsTable`, covidTest);
    }
}

export default new CovidTestDataService()