import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (adventureId, comment) =>
    request.post(baseUrl, { adventureId, text: comment });

export const getAll = (adventureId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`adventureId="${adventureId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}