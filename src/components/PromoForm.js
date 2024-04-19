"use client";
import { useState } from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import useCreate from "@/hooks/useCreate";
import { handlePromoForm } from "@/utils/handleInputForm";
import { useRouter } from "next/navigation";

export default function PromoForm() {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(false);
    const { createPromo } = useCreate();
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
            createPromo(handlePromoForm(formData));
            router.back();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            <div>
                <button onClick={handleUploadImage}>Upload Image</button>
                <button onClick={handleHaveImageUrl}>Have Image Url</button>
            </div>
            {isUploadImage && (
                <div className="w-1/2 self-center">
                    <ImagePreview />
                    <UploadImage />
                </div>
            )}

            <form onSubmit={handleSubmitForm} className="flex flex-col">
                <input name="title" placeholder="title" />
                {isHaveImageUrl && (
                    <input name="imageUrl" placeholder="Image Url" />
                )}

                <input name="promoCode" placeholder="Promo Code" />
                <textarea
                    name="description"
                    placeholder="Description"
                ></textarea>
                <textarea
                    name="termCondition"
                    placeholder="termCondition"
                ></textarea>
                <input
                    type="number"
                    name="promoDiscountPrice"
                    placeholder="Promo Discount Price"
                />
                <input
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
