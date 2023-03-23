import * as request from "./requester";
const baseUrl = 'http://localhost:3030/data/adventure';

export const getAll = () => request.get(baseUrl);

export const getOne = (adventureId) => request.get(`${baseUrl}/${adventureId}`);

export const create = (adventureData) => request.post(baseUrl, adventureData);

export const edit = (adventureId, adventureData) => request.put(`${baseUrl}/${adventureId}`, adventureData);

export const remove = (adventureId) => request.del(`${baseUrl}/${adventureId}`);