"use client";
import axios from "axios";
import { BASE_API, API_KEY } from "./api";
import apiInstance from "./axios";

export async function deletePromoAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-promo/${id}`, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}

export async function getAllPromoAPI() {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.get(`${BASE_API}/promos`, {
            headers: headers,
        });

        return res.data.data;
    }
}

export async function createPromoAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-promo`, payload, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
