import { BASE_API } from "@/API/api";
import { deleteBannerAPI } from "@/API/banner";
import { deletePromo } from "@/API/promo";
import axios from "axios";

export default function useDelete() {
    const deleteBannerId = async (id) => {
        try {
            const res = deleteBannerAPI(id);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return { deleteBannerId };
}