import { BASE_API, API_KEY } from "./api";

export default function apiInstance() {
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
