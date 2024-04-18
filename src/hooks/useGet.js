import { getAllBannerAPI } from "@/API/banner";
import { getAllCategoryAPI } from "@/API/category";
import { getAllPromoAPI } from "@/API/promo";

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

    return { getAllBennerData, getAllPromoData, getAllCategoryData };
}
