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
