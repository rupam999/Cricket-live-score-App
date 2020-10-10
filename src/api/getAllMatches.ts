import { getRequest } from './getRequest';
import { GET_ALL_MATCHES } from './Config';

export const getAllMatches = async () => {
    try {
        const res = await getRequest(GET_ALL_MATCHES);
        return res.data;
    } catch(err) {
        console.log('ERROR AT getAllMatchs', err)
        return 1;
    }
}