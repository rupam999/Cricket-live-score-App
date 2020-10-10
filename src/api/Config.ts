import axios from 'axios';

export const BASE_URL = 'https://www.cricbuzz.com';
export const GET_ALL_MATCHES = '/api/html/homepage-scag';
export const GET_PARTICULAR_MATCH_DETAILS = '/api/cricket-match/commentary';

export default axios.create({
    baseURL: BASE_URL,
});