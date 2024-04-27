import {
    getActivitiesByCategoryIdAPI,
    getActivityByIdAPI,
    getAllActivityAPI,
} from "@/API/activity";
import { getAllBannerAPI, getBannerByIdAPI } from "@/API/banner";
import { getAllCategoryAPI } from "@/API/category";
import { getAllPromoAPI, getPromoByIdAPI } from "@/API/promo";
import { getCategoryByIdAPI } from "@/API/category";

import { useState } from "react";

export function useGetAllData() {
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const getAllBennerData = async () => {
        try {
            setLoading(true);
            const res = await getAllBannerAPI();
            setLoading(false);
            return res;
        } catch (err) {}
    };
    const getAllPromoData = async () => {
        try {
            setLoading(true);
            const res = await getAllPromoAPI();
            setLoading(false);
            return res;
        } catch (err) {}
    };

    const getAllCategoryData = async () => {
        setLoading(true);
        try {
            const res = await getAllCategoryAPI();
            setLoading(false);
            return res;
        } catch (err) {}
    };
    const getAllActivityData = async () => {
        try {
            setLoading(true);
            const res = await getAllActivityAPI();
            setLoading(false);
            return res;
        } catch (err) {}
    };

    return {
        getAllBennerData,
        getAllPromoData,
        getAllCategoryData,
        getAllActivityData,
        loading,
    };
}

export function useGetDataById() {
    const getBannerById = async (id) => {
        try {
            const res = await getBannerByIdAPI(id);

            return res;
        } catch (err) {}
    };
    const getCategoryById = async (id) => {
        try {
            const res = await getCategoryByIdAPI(id);

            return res;
        } catch (err) {}
    };
    const getPromoById = async (id) => {
        try {
            const res = await getPromoByIdAPI(id);

            return res;
        } catch (err) {}
    };

    const getActivityById = async (id) => {
        try {
            const res = await getActivityByIdAPI(id);

            return res;
        } catch (err) {}
    };

    const getActivitiesByCategoryId = async (id) => {
        try {
            const res = await getActivitiesByCategoryIdAPI(id);
            return res;
        } catch (err) {}
    };

    return {
        getCategoryById,
        getBannerById,
        getPromoById,
        getActivityById,
        getActivitiesByCategoryId,
    };
}
