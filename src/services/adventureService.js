import * as request from "./requester";
const baseUrl = 'http://localhost:3030/data/adventure';

export const getAll = () => request.get(baseUrl);

export const create = (adventureData) => request.post(baseUrl, adventureData);