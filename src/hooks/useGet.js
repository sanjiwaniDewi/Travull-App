import { useState } from "react";
import {
    getActivitiesByCategoryIdAPI,
    getActivityByIdAPI,
    getAllActivityAPI,
} from "@/API/activity";
import { getAllBannerAPI, getBannerByIdAPI } from "@/API/banner";
import { getAllCategoryAPI } from "@/API/category";
import { getAllPromoAPI, getPromoByIdAPI } from "@/API/promo";
import { getCategoryByIdAPI } from "@/API/category";

export function useGetAllData() {
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const getAllBennerData = async () => {
        try {
            setLoading(true);
            const res = await getAllBannerAPI();
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };
    const getAllPromoData = async () => {
        try {
            setLoading(true);
            const res = await getAllPromoAPI();
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    const getAllCategoryData = async () => {
        setLoading(true);
        try {
            const res = await getAllCategoryAPI();
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };
    const getAllActivityData = async () => {
        try {
            setLoading(true);
            const res = await getAllActivityAPI();
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    return {
        getAllBennerData,
        getAllPromoData,
        getAllCategoryData,
        getAllActivityData,
        loading,
        err,
        loading,
    };
}

export function useGetDataById() {
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const getBannerById = async (id) => {
        setLoading(true);
        try {
            const res = await getBannerByIdAPI(id);
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };
    const getCategoryById = async (id) => {
        setLoading(true);
        try {
            const res = await getCategoryByIdAPI(id);
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };
    const getPromoById = async (id) => {
        setLoading(true);
        try {
            const res = await getPromoByIdAPI(id);
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    const getActivityById = async (id) => {
        setLoading(true);
        try {
            const res = await getActivityByIdAPI(id);
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    const getActivitiesByCategoryId = async (id) => {
        setLoading(true);
        try {
            const res = await getActivitiesByCategoryIdAPI(id);
            setLoading(false);
            return res;
        } catch (err) {
            setLoading(false);
            setErr(err);
        }
    };

    return {
        getCategoryById,
        getBannerById,
        getPromoById,
        getActivityById,
        getActivitiesByCategoryId,
        err,
        loading,
    };
}
