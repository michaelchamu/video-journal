import { API_URL } from "../configs/config";
const axios = require("axios");
const fetchItems = () => {
    return axios
        .get(`${API_URL}video`)
        .then(result => {
            return result.data;
        })
        .catch(err => {
            return err;
        });
};

const saveItems = (data, reactionId) => {
    console.log(API_URL + "reaction/" + reactionId);
    return axios
        .patch(API_URL + "reaction/" + reactionId, data)
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        });
};

const getComments = id => {
    return axios
        .get(`${API_URL}comments/${id}`)
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        });
};

export { fetchItems, saveItems, getComments };