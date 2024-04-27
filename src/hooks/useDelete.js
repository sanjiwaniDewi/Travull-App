import { deleteActivityAPI } from "@/API/activity";
import { BASE_API } from "@/API/api";
import { deleteBannerAPI } from "@/API/banner";
import { deleteCategoryAPI } from "@/API/category";
import { deletePromoAPI } from "@/API/promo";
import axios from "axios";

export default function useDelete() {
    const deleteBannerId = async (id) => {
        try {
            const res = deleteBannerAPI(id);
        } catch (err) {}
    };
    const deletePromoId = async (id) => {
        try {
            const res = deletePromoAPI(id);
        } catch (err) {}
    };

    const deleteCategoryId = async (id) => {
        try {
            const res = deleteCategoryAPI(id);
        } catch (err) {}
    };

    const deleteActivityId = async (id) => {
        try {
            const res = deleteActivityAPI(id);
        } catch (err) {}
    };

    return {
        deleteBannerId,
        deletePromoId,
        deleteCategoryId,
        deleteActivityId,
    };
}
