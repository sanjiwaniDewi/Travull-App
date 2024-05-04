import { deleteActivityAPI } from "@/API/activity";
import { BASE_API } from "@/API/api";
import { deleteBannerAPI } from "@/API/banner";
import { deleteCategoryAPI } from "@/API/category";
import { deletePromoAPI } from "@/API/promo";
import axios from "axios";
import { useState } from "react";

export default function useDelete() {
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const deleteBannerId = async (id) => {
        setLoading(true);
        try {
            const res = deleteBannerAPI(id);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };
    const deletePromoId = async (id) => {
        setLoading(true);
        try {
            const res = deletePromoAPI(id);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    const deleteCategoryId = async (id) => {
        setLoading(true);
        try {
            const res = deleteCategoryAPI(id);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    const deleteActivityId = async (id) => {
        setLoading(true);
        try {
            const res = deleteActivityAPI(id);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    return {
        deleteBannerId,
        deletePromoId,
        deleteCategoryId,
        deleteActivityId,
        err,
        loading,
    };
}
