export function handlePromoForm(formData, figureUrl, isHaveImageUrl) {
    let imageUrl = figureUrl;
    const title = formData.get("title");
    const description = formData.get("description");

    if (!figureUrl || isHaveImageUrl) {
        imageUrl = formData.get("imageUrl");
    }

    const promoCode = formData.get("promoCode");
    const promoDiscountPrice = formData.get("promoDiscountPrice");
    const minClaimPrice = formData.get("minClaimPrice");
    const termCondition = formData.get("termCondition");

    return {
        title,
        description,
        imageUrl,
        promo_code: promoCode,
        promo_discount_price: parseInt(promoDiscountPrice),
        minimum_claim_price: parseInt(minClaimPrice),
        terms_condition: termCondition,
    };
}

export function handleCategoryForm(formData, figureUrl) {
    let imageUrl = figureUrl;
    const name = formData.get("name");
    if (!figureUrl) {
        imageUrl = formData.get("imageUrl");
    }
    return {
        name,
        imageUrl,
    };
}

export function handleActivityForm(formData, figureUrl, isHaveImageUrl) {
    let imageUrls = figureUrl;
    const title = formData.get("title");
    const description = formData.get("description");

    const category = formData.get("category");

    const price = formData.get("price");
    const priceDiscount = formData.get("priceDiscount");
    const rating = formData.get("rating");
    const totalReviews = formData.get("totalReviews");
    const facilities = formData.get("facilities");
    const address = formData.get("address");
    const city = formData.get("city");
    const province = formData.get("province");
    const locationMaps = formData.get("locationMaps");
    if (!figureUrl || isHaveImageUrl) {
        const url = formData.get("imageUrl");
        imageUrls = url?.split(",");
    }
    if (category !== "category") {
        return {
            title,
            description,
            imageUrls,
            categoryId: category,
            price: parseInt(price),
            price_discount: parseInt(priceDiscount),
            rating: parseInt(rating),
            total_reviews: parseInt(totalReviews),
            facilities,
            address,
            city,
            province,
            location_maps: locationMaps,
        };
    }
}
