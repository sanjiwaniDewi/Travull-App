import { deletePromo } from "@/API/promo";
import useCreate from "@/hooks/useCreate";
import useDelete from "@/hooks/useDelete";
import { useGetDataById } from "@/hooks/useGet";

export function handleDeleteItem(id, type) {
    const {
        deleteBannerId,
        deletePromoId,
        deleteCategoryId,
        deleteActivityId,
    } = useDelete();
    switch (type) {
        case "banner":
            return deleteBannerId(id);
        case "promo":
            return deletePromoId(id);
        case "category":
            return deleteCategoryId(id);
        case "activity":
            return deleteActivityId(id);
        default:
            return;
    }
}

// export function handleAddItem(type, payload) {
//     const { createBanner } = useCreate();
//     switch (type) {
//         case "banner":
//             return createBanner(payload);
//         case "promo":
//             return;
//         case "category":
//             return;
//         case "activity":
//             return;
//         default:
//             return;
//     }
// }

export function handlerGetItemById(id, type) {
    const { getCategoryById } = useGetDataById();
    switch (type) {
        case "banner":
            return;
        case "promo":
            return;
        case "category":
            return getCategoryById(id);
        case "activity":
            return;
        default:
            return;
    }
}

export function handleCreateRoute(type) {
    switch (type) {
        case "banner":
            return "/dashboard/banner/create-banner";
        case "promo":
            return "/dashboard/promo/create-promo";
        case "category":
            return "/dashboard/category/create-category";
        case "activity":
            return "/dashboard/activity/create-activity";
        default:
            return;
    }
}

export function handleUpdateRoute(id, type) {
    switch (type) {
        case "banner":
            return `/dashboard/banner/${id}`;
        case "promo":
            return `/dashboard/promo/${id}`;
        case "category":
            return `/dashboard/category/${id}`;
        case "activity":
            return `/dashboard/activity/${id}`;
        default:
            return;
    }
}
