import { getAllBannerAPI } from "@/API/banner";
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

    return { getAllBennerData, getAllPromoData };
}
