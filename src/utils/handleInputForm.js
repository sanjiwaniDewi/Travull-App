import { useState } from "react";
import { checkIsEmptyInput } from "./handleFormatData";

export function handlePromoForm(formData, figureUrl, isHaveImageUrl) {
    let imageUrl = figureUrl;
    const title = checkIsEmptyInput(formData.get("title"));
    const description = checkIsEmptyInput(formData.get("description"));

    if (!figureUrl || isHaveImageUrl) {
        imageUrl = checkIsEmptyInput(formData.get("imageUrl"));
    }

    const promoCode = checkIsEmptyInput(formData.get("promoCode")); //formData.get("promoCode");
    const promoDiscountPrice = formData.get("promoDiscountPrice");
    const minClaimPrice = formData.get("minClaimPrice");
    const termCondition = checkIsEmptyInput(formData.get("termCondition"));

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

export function handleActivityForm(formData, figureUrl, isHaveImageUrl) {
    let imageUrls =
        (figureUrl.length === 1 && figureUrl[0] === "") ||
        figureUrl.length === 0
            ? null
            : figureUrl;
    const title = checkIsEmptyInput(formData.get("title"));
    const description = checkIsEmptyInput(formData.get("description"));

    const category = checkIsEmptyInput(formData.get("category"));

    const price = checkIsEmptyInput(formData.get("price"));
    const priceDiscount = checkIsEmptyInput(formData.get("priceDiscount"));
    const rating = checkIsEmptyInput(formData.get("rating"));
    const totalReviews = checkIsEmptyInput(formData.get("totalReviews"));
    const facilities = checkIsEmptyInput(formData.get("facilities"));
    const address = checkIsEmptyInput(formData.get("address"));
    const city = checkIsEmptyInput(formData.get("city"));
    const province = checkIsEmptyInput(formData.get("province"));
    const locationMaps = checkIsEmptyInput(formData.get("locationMaps"));

    return {
        title,
        description,
        imageUrls,
        categoryId: category === "category" ? null : category,
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
