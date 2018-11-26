import { API_URL } from '../configs/config';
const axios = require('axios');
const fetchItems = () => {
    return axios
        .get(API_URL)
        .then(result => {
            return result.data;
        })
        .catch(err => {
            return err;
        });
};

const saveItems = data => {
    return axios
        .post(API_URL, data)
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        });
};

export { fetchItems, saveItems };
