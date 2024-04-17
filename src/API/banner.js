"use client";
import axios from "axios";
import { BASE_API, API_KEY } from "./api";
import { token, headers } from "./axios";

export async function deleteBanner(id) {
    if (token) {
        const res = await axios.delete(`${BASE_API}/delete-banner/${id}`, {
            headers: headers,
        });
        console.log(res.data);
        return res.data;
    }
}
