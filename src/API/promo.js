"use client";
import axios from "axios";
import { BASE_API, API_KEY } from "./api";
import { apiInstance, apiInstanceWithoutToken } from "./axios";

export async function deletePromoAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-promo/${id}`, {
            headers: headers,
        });

        return res.data;
    }
}

export async function getAllPromoAPI() {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/promos`, {
        headers: headers,
    });

    return res.data.data;
}

export async function createPromoAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-promo`, payload, {
            headers: headers,
        });

        return res.data;
    }
}

export async function updatePromoAPI(id, payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(
            `${BASE_API}/update-promo/${id}`,
            payload,
            {
                headers: headers,
            }
        );

        return res.data.data;
    }
}

export async function getPromoByIdAPI(id) {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/promo/${id}`, {
        headers: headers,
    });

    return res.data.data;
}
