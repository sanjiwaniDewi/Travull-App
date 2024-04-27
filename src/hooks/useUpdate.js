import { updateBannerAPI } from "@/API/banner";
import { updateCategoryAPI } from "@/API/category";
import { updatePromoAPI } from "@/API/promo";
import { updateActivityAPI } from "@/API/activity";

export default function useUpdate() {
    const updateBanner = async (id, payload) => {
        try {
            const res = await updateBannerAPI(id, payload);
           
        } catch (err) {
           
        }
    };
    const updateCategory = async (id, payload) => {
        try {
            const res = await updateCategoryAPI(id, payload);
           
        } catch (err) {
            
        }
    };

    const updatePromo = async (id, payload) => {
        try {
            const res = await updatePromoAPI(id, payload);
           
        } catch (err) {
            
        }
    };
    const updateActivity = async (id, payload) => {
        try {
            const res = await updateActivityAPI(id, payload);
          
        } catch (err) {
           
        }
    };

    return { updateBanner, updateCategory, updatePromo, updateActivity };
}
