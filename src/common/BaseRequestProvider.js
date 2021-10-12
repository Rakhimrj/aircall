const axios = require('axios');
const BASE_URL = 'https://aircall-job.herokuapp.com';

export const getActivity = () => {
    try {
        return axios.get(`${BASE_URL}/activities`);
    } catch(e) {
        console.log('error', e)
    }
}

export const archiveContact = (id, bool) => {
    try {
        return axios.post(`${BASE_URL}/activities/${id}`, {is_archived: bool});
    } catch(e) {
        console.log('error', e)
    }
}