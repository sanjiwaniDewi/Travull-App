import { deletePromo } from "@/API/promo";
import useCreate from "@/hooks/useCreate";
import useDelete from "@/hooks/useDelete";

export function handleDeleteItem(id, type) {
    const { deleteBannerId, deletePromoId } = useDelete();
    switch (type) {
        case "banner":
            return deleteBannerId(id);
        case "promo":
            return deletePromoId(id);
        case "category":
            return;
        case "activity":
            return;
        default:
            return;
    }
}

export function handleAddItem(type, payload) {
    const { createBanner } = useCreate();
    switch (type) {
        case "banner":
            return createBanner(payload);
        case "promo":
            return;
        case "category":
            return;
        case "activity":
            return;
        default:
            return;
    }
}

export function handleCreateRoute(type) {
    switch (type) {
        case "banner":
            return "/dashboard/banners/create-banner";
        case "promo":
            return "/dashboard/promos/create-promo";
        case "category":
            return "/dashboard/categories/create-category";
        case "activity":
            return "/dashboard/activity/create-activity";
        default:
            return;
    }
}
