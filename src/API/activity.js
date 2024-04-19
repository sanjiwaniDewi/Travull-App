"use client";
import axios from "axios";
import { BASE_API } from "./api";
import apiInstance from "./axios";

export async function createActivityAPI(payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(`${BASE_API}/create-activity`, payload, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
export async function deleteActivityAPI(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-activity/${id}`, {
            headers: headers,
        });
        return res.data;
    }
}

export async function getAllActivityAPI() {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.get(`${BASE_API}/activities`, {
            headers: headers,
        });

        return res.data.data;
    }
}