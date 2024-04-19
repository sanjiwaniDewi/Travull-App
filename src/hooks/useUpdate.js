import { updateBannerAPI } from "@/API/banner";

export default function useUpdate() {
    const updateBanner = async (id, payload) => {
        try {
            const res = await updateBannerAPI(id, payload);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    return { updateBanner };
}
