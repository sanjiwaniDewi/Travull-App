"use client";
import axios from "axios";
import { BASE_API } from "./api";
import { apiInstance, apiInstanceWithoutToken } from "./axios";

export async function createCategoryAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-category`, payload, {
            headers: headers,
        });

        return res.data.data;
    }
}
export async function deleteCategoryAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-category/${id}`, {
            headers: headers,
        });
        return res.data.data;
    }
}

export async function getAllCategoryAPI() {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/categories`, {
        headers: headers,
    });

    return res.data.data;
}

export async function getCategoryByIdAPI(id) {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/category/${id}`, {
        headers: headers,
    });
    return res.data.data;
}

export async function updateCategoryAPI(id, payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(
            `${BASE_API}/update-category/${id}`,
            payload,
            {
                headers: headers,
            }
        );

        return res.data.data;
    }
}
