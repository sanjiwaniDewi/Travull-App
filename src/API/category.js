"use client";
import axios from "axios";
import { BASE_API } from "./api";
import apiInstance from "./axios";

export async function createCategoryAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-category`, payload, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
export async function deleteCategoryAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-category/${id}`, {
            headers: headers,
        });
        return res.data;
    }
}

export async function getAllCategoryAPI() {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.get(`${BASE_API}/categories`, {
            headers: headers,
        });

        return res.data.data;
    }
}
