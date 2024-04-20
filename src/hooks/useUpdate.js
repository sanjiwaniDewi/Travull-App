import { updateBannerAPI } from "@/API/banner";
import { updateCategoryAPI } from "@/API/category";
import { updatePromoAPI } from "@/API/promo";

export default function useUpdate() {
    const updateBanner = async (id, payload) => {
        try {
            const res = await updateBannerAPI(id, payload);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    const updateCategory = async (id, payload) => {
        try {
            const res = await updateCategoryAPI(id, payload);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const updatePromo = async (id, payload) => {
        try {
            const res = await updatePromoAPI(id, payload);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return { updateBanner, updateCategory, updatePromo };
}
