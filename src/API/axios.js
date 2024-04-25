import { BASE_API, API_KEY } from "./api";

export function apiInstance() {
    const token = localStorage.getItem("access_token");
    const headers = {
        apiKey: API_KEY,
        Authorization: `Bearer ${token}`,
    };

    if (token) {
        return {
            token,
            headers,
        };
    }
}

export function apiInstanceWithoutToken() {
    const headers = {
        apiKey: API_KEY,
    };

    return {
        headers,
    };
}
