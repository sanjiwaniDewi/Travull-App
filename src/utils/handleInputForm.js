export function handlePromoForm(formData, figureUrl) {
    let imageUrl = figureUrl;
    const title = formData.get("title");
    const description = formData.get("description");

    if (!figureUrl) {
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
