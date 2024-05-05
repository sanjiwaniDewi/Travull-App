import { useState } from "react";
import { createActivityAPI } from "@/API/activity";
import { createBannerAPI } from "@/API/banner";
import { createCategoryAPI } from "@/API/category";
import { createPromoAPI } from "@/API/promo";

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
            setErr(err?.response?.data?.errors);
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
            setErr(err?.response?.data?.errors);
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
            setErr(err?.response?.data?.errors);
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
