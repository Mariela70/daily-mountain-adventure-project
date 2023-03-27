import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async(adventureId) => {
    const query = encodeURIComponent(`adventureId="${adventureId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${query}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (adventureId, comment) => {
const result = await request.post(baseUrl, {adventureId, comment});

return result;
};