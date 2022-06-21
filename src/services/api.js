import axios from "axios";

const api = axios.create({
    baseURL: 'http://shoes.hungvu.net',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});

export const getProducts = () => {
    return api.get('/get-products');
};

export const getDetail = (id) => {
    return api.get(`/product/${id}`);
};

export const getComment = () => {
    return api.get('/comment');
};

export const createComments = (params) => {
    return api.post(`/comment`, params);
};

export const getCategory = () => {
    return api.post(`/get-categories`);
};

export const getGender = () => {
    return api.post(`/get-genders`);
};

export const getBrand = () => {
    return api.post(`/get-brands`);
};