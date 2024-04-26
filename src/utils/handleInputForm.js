import { useState } from "react";

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

export function handleRegistationForm(formData, image) {
    // const [customError, setCustomError] = useState("");
    let customError = "";

    const name = formData.get("name");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordRepeat = formData.get("passwordRepeat");
    const role = formData.get("role");

    if (password !== passwordRepeat) {
        customError = "Password not match";
        return {
            customError,
        };
    }
    if (!name || !phoneNumber || !email || !password || !passwordRepeat) {
        customError = "Please fill all the input";
        return {
            customError,
        };
    }
    const payload = {
        name,
        email,
        password,
        passwordRepeat,
        profilePictureUrl: image,
        phoneNumber,
        role,
    };

    return {
        payload,
        customError,
    };
}

export function handleLoginForm(formData) {
    let customError = "";
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email && !password) {
        return {
            customError: "Please fill all the input",
        };
    }
    if (!email) {
        return {
            customError: "Please fill email",
        };
    }
    if (!password) {
        return {
            customError: "Please fill password",
        };
    }

    const payload = {
        email,
        password,
    };

    return {
        payload,
    };
}
