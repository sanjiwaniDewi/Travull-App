"use client";
import axios from "axios";
import { BASE_API, API_KEY } from "./api";
import { apiInstance, apiInstanceWithoutToken } from "./axios";

export async function createBannerAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-banner`, payload, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
export async function deleteBannerAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-banner/${id}`, {
            headers: headers,
        });
        return res.data;
    }
}

export async function getAllBannerAPI() {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/banners`, {
        headers: headers,
    });

    return res.data.data;
}

export async function getBannerByIdAPI(id) {
    const { token, headers } = apiInstanceWithoutToken();
    if (token) {
        const res = await axios.get(`${BASE_API}/banner/${id}`, {
            headers: headers,
        });
        return res.data.data;
    }
}

export async function updateBannerAPI(id, payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(
            `${BASE_API}/update-banner/${id}`,
            payload,
            {
                headers: headers,
            }
        );
        return res.data.data;
    }
}
