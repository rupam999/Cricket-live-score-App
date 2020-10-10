import { getRequest } from './getRequest';
import { GET_PARTICULAR_MATCH_DETAILS } from './Config';

export const getParticularMatchDetails = async (matchId: Number) => {
    const res = await getRequest(`${GET_PARTICULAR_MATCH_DETAILS}/${matchId}`);
    return res.data;
}