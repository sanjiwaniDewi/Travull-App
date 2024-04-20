"use client";
import { useState } from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import useCreate from "@/hooks/useCreate";
import { handlePromoForm } from "@/utils/handleInputForm";
import { useRouter } from "next/navigation";
import useUpdate from "@/hooks/useUpdate";
import { useSelector } from "react-redux";

export default function PromoForm({ promoData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(false);
    const { imageUrl } = useSelector((store) => store.image);
    const { createPromo } = useCreate();
    const { updatePromo } = useUpdate();
    const router = useRouter();
    const handleHaveImageUrl = () => {
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            if (promoData) {
                // updatePromo(promoData.id, handlePromoForm(formData));
                const figureUrl = imageUrl ? imageUrl : promoData?.imageUrl;
                updatePromo(promoData.id, handlePromoForm(formData, figureUrl));
            } else {
                createPromo(handlePromoForm(formData, imageUrl));
            }
        } catch (err) {
            console.log(err);
        }
        // router.back();
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            <div>
                <button onClick={handleUploadImage}>Upload Image</button>
                <button onClick={handleHaveImageUrl}>Have Image Url</button>
            </div>
            {isUploadImage && (
                <div className="w-1/2 self-center">
                    <ImagePreview figureUrl={promoData?.imageUrl} />
                    <UploadImage />
                </div>
            )}

            <form onSubmit={handleSubmitForm} className="flex flex-col">
                <input
                    defaultValue={promoData?.title}
                    name="title"
                    placeholder="title"
                />
                {isHaveImageUrl && (
                    <input
                        defaultValue={promoData?.imageUrl}
                        name="imageUrl"
                        placeholder="Image Url"
                    />
                )}

                <input
                    defaultValue={promoData?.promo_code}
                    name="promoCode"
                    placeholder="Promo Code"
                />
                <textarea
                    defaultValue={promoData?.description}
                    name="description"
                    placeholder="Description"
                ></textarea>
                <textarea
                    defaultValue={promoData?.terms_condition}
                    name="termCondition"
                    placeholder="termCondition"
                ></textarea>
                <input
                    defaultValue={promoData?.promo_discount_price}
                    type="number"
                    name="promoDiscountPrice"
                    placeholder="Promo Discount Price"
                />
                <input
                    defaultValue={promoData?.minimum_claim_price}
                    type="number"
                    name="minClaimPrice"
                    placeholder="Minimum Claim Price"
                />

                <button
                    type="submit"
                    disabled={!isHaveImageUrl && !isUploadImage}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
