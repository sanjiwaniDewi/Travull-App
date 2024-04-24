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
    const getAllBennerData = async () => {
        try {
            const res = await getAllBannerAPI();
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };
    const getAllPromoData = async () => {
        try {
            const res = await getAllPromoAPI();
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const getAllCategoryData = async () => {
        try {
            const res = await getAllCategoryAPI();
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };
    const getAllActivityData = async () => {
        try {
            const res = await getAllActivityAPI();
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };

    return {
        getAllBennerData,
        getAllPromoData,
        getAllCategoryData,
        getAllActivityData,
    };
}

export function useGetDataById() {
    const getBannerById = async (id) => {
        try {
            const res = await getBannerByIdAPI(id);
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };
    const getCategoryById = async (id) => {
        try {
            const res = await getCategoryByIdAPI(id);
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    };
    const getPromoById = async (id) => {
        try {
            const res = await getPromoByIdAPI(id);
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
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
