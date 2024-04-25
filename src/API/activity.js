"use client";
import axios from "axios";
import { BASE_API } from "./api";
import { apiInstance, apiInstanceWithoutToken } from "./axios";

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
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/activities`, {
        headers: headers,
    });

    return res.data.data;
}

export async function updateActivityAPI(id, payload) {
    const { token, headers } = apiInstance();
    if (token) {
        const res = await axios.post(
            `${BASE_API}/update-activity/${id}`,
            payload,
            {
                headers: headers,
            }
        );
        console.log(res.data);
        return res.data.data;
    }
}

export async function getActivityByIdAPI(id) {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/activity/${id}`, {
        headers: headers,
    });
    return res.data.data;
}

export async function getActivitiesByCategoryIdAPI(id) {
    const { headers } = apiInstanceWithoutToken();

    const res = await axios.get(`${BASE_API}/activities-by-category/${id}`, {
        headers: headers,
    });
    return res.data.data;
}
