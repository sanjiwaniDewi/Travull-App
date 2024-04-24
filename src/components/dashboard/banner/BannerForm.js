"use client";
import { useDispatch, useSelector } from "react-redux";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import useCreate from "@/hooks/useCreate";
import { useRouter } from "next/navigation";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import useUpdate from "@/hooks/useUpdate";
import {
    changeCreateSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import ImageBtnOption from "@/components/utils/ImageBtnOption";
import { useState } from "react";

export default function BannerForm({ bannerData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    const { createBanner } = useCreate();
    const { updateBanner } = useUpdate();
    const { imageUrl } = useSelector((store) => store.image);
    const { isEdit } = useSelector((store) => store.status);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleHaveImageUrl = () => {
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };
    const handleSubmitBanner = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const urlImage = formData.get("imageUrl");

        if (bannerData) {
            updateBanner(bannerData.id, {
                name,
                imageUrl: bannerData.imageUrl,
            });

            dispatch(changeEditStatus());
            // router.back();
        } else {
            createBanner({ name, imageUrl });
            dispatch(changeCreateSatus());
            // router.back();
        }
        dispatch(deleteImageUrl());
        // router.push("/dashboard");
    };

    return (
        <div className=" lg:w-1/3 w-3/4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
            <div className="flex flex-col justify-center items-center gap-y-4">
                <ImageBtnOption
                    haveImageUrl={handleHaveImageUrl}
                    uploadImage={handleUploadImage}
                />
                {isUploadImage && (
                    <div className="w-11/12 self-center">
                        {bannerData?.imageUrl || imageUrl?.length !== 0 ? (
                            <ImagePreview
                                figureUrl={bannerData && bannerData?.imageUrl}
                            />
                        ) : (
                            <div className="h-96 flex justify-center items-center content-center">
                                <p className="text-lg font-bold text-slate-300">
                                    No Image
                                </p>
                            </div>
                        )}

                        <UploadImage />
                    </div>
                )}
                <form
                    onSubmit={handleSubmitBanner}
                    className="self-center w-11/12 flex flex-col gap-y-1"
                >
                    <input
                        defaultValue={bannerData ? bannerData?.name : ""}
                        name="name"
                        className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                        placeholder="Banner Name"
                    />
                    {isHaveImageUrl && (
                        <input
                            defaultValue={
                                bannerData ? bannerData?.imageUrl : ""
                            }
                            name="imageUrl"
                            className="w-full focus:outline-slate-600 py-3 mb-2 bg-slate-100 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Banner image url"
                        />
                    )}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-slate-500 text-sm text-white py-2  px-4 rounded-2xl w-1/4"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
