import { getAllBannerAPI } from "@/API/banner";
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
    return { getAllBennerData };
}
