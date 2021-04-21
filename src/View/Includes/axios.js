import axios from 'axios'

// Create instance called instance
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default {
    getDate: ( route ) =>
        instance({
            'method' : 'GET',
            'url' : route,
            'params' : {
                'search' : 'parameter',
            }
        })
}
