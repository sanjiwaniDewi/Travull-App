"use client";
import { useState } from "react";
import UploadImage from "../../utils/UploadImage";
import ImagePreview from "../../utils/ImagePreview";
import useCreate from "@/hooks/useCreate";
import { handlePromoForm } from "@/utils/handleInputForm";
import { useRouter } from "next/navigation";
import useUpdate from "@/hooks/useUpdate";
import { useSelector, useDispatch } from "react-redux";
import ImageBtnOption from "@/components/utils/ImageBtnOption";
import {
    deleteImageUrl,
    getImageUrl,
} from "@/redux/features/upload/imageSlice";
import { updateItem } from "@/redux/features/data/dataSlice";
import {
    changeCreateSatus,
    changeEditStatus,
    changeDeleteSatus,
} from "@/redux/features/status/statusSilce";

export default function PromoForm({ promoData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    const { imageUrl } = useSelector((store) => store.image);
    const { isUpdate, isCreate } = useSelector((store) => store.status);
    const { createPromo } = useCreate();
    const { updatePromo } = useUpdate();

    const dispatch = useDispatch();

    const router = useRouter();
    const handleHaveImageUrl = () => {
        dispatch(deleteImageUrl());
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        dispatch(deleteImageUrl());
        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newImageUrl = formData.get("imageUrl");

        try {
            if (promoData) {
                // updatePromo(promoData.id, handlePromoForm(formData));
                if (isHaveImageUrl) {
                    dispatch(getImageUrl(newImageUrl));
                }

                const figureUrl = imageUrl ? imageUrl : promoData?.imageUrl;

                updatePromo(
                    promoData.id,
                    handlePromoForm(formData, figureUrl, isHaveImageUrl)
                );
                dispatch(updateItem(promoData));
                dispatch(changeEditStatus());
                router.back();
            } else {
                if (isHaveImageUrl) {
                    dispatch(getImageUrl(newImageUrl));
                }
                createPromo(handlePromoForm(formData, imageUrl));

                dispatch(changeCreateSatus());
                router.back();
            }
        } catch (err) {}
        // router.back();
    };

    return (
        <div className="w-full container mx-auto flex flex-col py-16  items-center ">
            <div className=" w-3/4 mb-4 rounded-lg">
                <ImagePreview figureUrl={promoData?.imageUrl} />
            </div>

            <div className=" lg:w-1/3 w-3/4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <ImageBtnOption
                        haveImageUrl={handleHaveImageUrl}
                        uploadImage={handleUploadImage}
                    />
                    {isUploadImage && (
                        <div className="w-11/12 self-center">
                            <UploadImage />
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmitForm}
                        className="self-center w-11/12 flex flex-col gap-y-1"
                    >
                        <input
                            defaultValue={promoData?.title}
                            name="title"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="title"
                        />
                        {isHaveImageUrl && (
                            <input
                                defaultValue={promoData?.imageUrl}
                                name="imageUrl"
                                className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                placeholder="Image Url"
                            />
                        )}

                        <input
                            defaultValue={promoData?.promo_code}
                            name="promoCode"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Promo Code"
                        />
                        <textarea
                            defaultValue={promoData?.description}
                            name="description"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Description"
                        ></textarea>
                        <textarea
                            defaultValue={promoData?.terms_condition}
                            name="termCondition"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="termCondition"
                        ></textarea>
                        <input
                            defaultValue={promoData?.promo_discount_price}
                            type="number"
                            name="promoDiscountPrice"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Promo Discount Price"
                        />
                        <input
                            defaultValue={promoData?.minimum_claim_price}
                            type="number"
                            name="minClaimPrice"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Minimum Claim Price"
                        />

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!isHaveImageUrl && !isUploadImage}
                                className="bg-slate-500 text-sm text-white py-2  px-4 rounded-2xl w-1/4"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
