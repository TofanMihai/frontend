import axios from 'axios';

const API_URL = "http://localhost:8080/assignment2"

class ForumService
{
    getForumMessage()
    {
        return axios.get(`${API_URL}/getInvite`);
    }

    sendForumMessage(message){
        return axios.post(`${API_URL}/sendInvite/${message}`);
    }
}

export default new ForumService()