import axios from 'axios';

export function getResources() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };

    return axios.get('api/resources', config)
        .then(response => response.data)
        .catch((error) => {throw error;});
}
