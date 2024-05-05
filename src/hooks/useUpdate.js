import { useState } from "react";
import { updateBannerAPI } from "@/API/banner";
import { updateCategoryAPI } from "@/API/category";
import { updatePromoAPI } from "@/API/promo";
import { updateActivityAPI } from "@/API/activity";

export default function useUpdate() {
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const updateBanner = async (id, payload) => {
        setLoading(true);
        try {
            await updateBannerAPI(id, payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err.response.data.errors);
        }
    };
    const updateCategory = async (id, payload) => {
        setLoading(true);
        try {
            await updateCategoryAPI(id, payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err.response.data.errors);
        }
    };

    const updatePromo = async (id, payload) => {
        setLoading(true);
        try {
            await updatePromoAPI(id, payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err.response.data.errors);
        }
    };
    const updateActivity = async (id, payload) => {
        setLoading(true);
        try {
            await updateActivityAPI(id, payload);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            setLoading(false);
            setErr(err.response.data.errors);
        }
    };

    return {
        updateBanner,
        updateCategory,
        updatePromo,
        updateActivity,
        err,
        loading,
        success,
    };
}
