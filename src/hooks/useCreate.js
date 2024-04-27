import { createActivityAPI } from "@/API/activity";
import { BASE_API } from "@/API/api";
import { createBannerAPI } from "@/API/banner";
import { createCategoryAPI } from "@/API/category";
import { createPromoAPI, deletePromo } from "@/API/promo";
import axios from "axios";

export default function useCreate() {
    const createBanner = async (payload) => {
        try {
            const res = createBannerAPI(payload);
        } catch (err) {}
    };

    const createPromo = async (payload) => {
        try {
            const res = createPromoAPI(payload);
        } catch (err) {}
    };

    const createCategory = async (payload) => {
        try {
            const res = createCategoryAPI(payload);
        } catch (err) {}
    };
    const createActivity = async (payload) => {
        try {
            const res = createActivityAPI(payload);
        } catch (err) {}
    };

    return { createBanner, createPromo, createCategory, createActivity };
}
