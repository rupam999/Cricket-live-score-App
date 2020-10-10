import axios from './Config';

export const getRequest = (endPoint, params?) => {
    return axios.get(endPoint, {params});
}