import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (adventureId, comment) => {
request.post(baseUrl, {adventureId, text: comment})
};