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

            <div className=" lg:w-1/2 w-3/4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <ImageBtnOption
                        haveImageUrl={handleHaveImageUrl}
                        uploadImage={handleUploadImage}
                        isHaveImageUrl={isHaveImageUrl}
                    />
                    {isUploadImage && (
                        <div className="w-11/12 self-center">
                            <label className="text-sm font-semibold">
                                Upload Gambar
                            </label>
                            <UploadImage
                                customStyleBtn={
                                    "bg-primary-200 w-full px-4 rounded-xl text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 "
                                }
                                customStyleInput="bg-secondary-200 bg-opacity-30 mt-1 mb-0"
                            />
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmitForm}
                        className="self-center w-11/12   gap-y-1"
                    >
                        <div className="lg:flex  gap-x-4 pb-8">
                            <div>
                                <label className="text-sm font-semibold">
                                    Judul Promo
                                </label>
                                <input
                                    defaultValue={promoData?.title}
                                    name="title"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder="Judul Promo"
                                />
                                {isHaveImageUrl && (
                                    <div>
                                        <label className="text-sm font-semibold">
                                            Url gambar
                                        </label>
                                        <input
                                            defaultValue={promoData?.imageUrl}
                                            name="imageUrl"
                                            className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                            placeholder="Url gambar"
                                        />
                                    </div>
                                )}

                                <label className="text-sm font-semibold">
                                    Kode Promo
                                </label>

                                <input
                                    defaultValue={promoData?.promo_code}
                                    name="promoCode"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder="Kode promo"
                                />

                                <label className="text-sm font-semibold">
                                    Deskripsi
                                </label>
                                <textarea
                                    defaultValue={promoData?.description}
                                    name="description"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder="Deskripsi"
                                ></textarea>
                            </div>
                            <div>
                                <label className="text-sm font-semibold">
                                    Sarat & ketentuan
                                </label>
                                <textarea
                                    defaultValue={promoData?.terms_condition}
                                    name="termCondition"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder=" Sarat & Ketentuan"
                                ></textarea>
                                <label className="text-sm font-semibold">
                                    Harga diskon
                                </label>
                                <input
                                    defaultValue={
                                        promoData?.promo_discount_price
                                    }
                                    type="number"
                                    name="promoDiscountPrice"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder="Harga Promo"
                                />
                                <label className="text-sm font-semibold">
                                    Minimum Klaim
                                </label>
                                <input
                                    defaultValue={
                                        promoData?.minimum_claim_price
                                    }
                                    type="number"
                                    placeholder="Minium Klaim Promo"
                                    name="minClaimPrice"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!isHaveImageUrl && !isUploadImage}
                                className="bg-primary-200  text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 px-4 py-3 rounded-2xl w-1/4"
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
