"use client";
import axios from "axios";
import { BASE_API, API_KEY } from "./api";
import apiInstance from "./axios";

export async function deletePromo(id) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-promo/${id}`, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
