import { BASE_API, API_KEY } from "./api";
export const token = localStorage.getItem("access_token");
export const headers = {
    apiKey: API_KEY,
    Authorization: `Bearer ${token}`,
};
