import { createActivityAPI } from "@/API/activity";
import { BASE_API } from "@/API/api";
import { createBannerAPI } from "@/API/banner";
import { createCategoryAPI } from "@/API/category";
import { createPromoAPI, deletePromo } from "@/API/promo";
import axios from "axios";
import { useState } from "react";

export default function useCreate() {
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const createBanner = async (payload) => {
        setLoading(true);
        try {
            await createBannerAPI(payload);
            setSuccess(true);
            setLoading(false);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err);
        }
    };

    const createPromo = async (payload) => {
        setLoading(true);
        try {
            await createPromoAPI(payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setLoading(false);
            setSuccess(false);
            setErr(err?.response?.data?.errors);
        }
    };

    const createCategory = async (payload) => {
        setLoading(true);
        try {
            await createCategoryAPI(payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err);
        }
    };
    const createActivity = async (payload) => {
        setLoading(true);
        try {
            await createActivityAPI(payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err);
        }
    };

    return {
        createBanner,
        createPromo,
        createCategory,
        createActivity,
        err,
        loading,
        success,
    };
}
