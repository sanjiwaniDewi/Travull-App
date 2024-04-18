import { BASE_API } from "@/API/api";
import { createBannerAPI } from "@/API/banner";
import { deletePromo } from "@/API/promo";
import axios from "axios";

export default function useCreate() {
    const createBanner = async (payload) => {
        try {
            const res = createBannerAPI(payload);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return { createBanner };
}
