"use client";
import { useDispatch, useSelector } from "react-redux";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import useCreate from "@/hooks/useCreate";
import { useRouter } from "next/navigation";
import {
    deleteImageUrl,
    getImageUrl,
} from "@/redux/features/upload/imageSlice";
import useUpdate from "@/hooks/useUpdate";
import {
    changeCreateSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import ImageBtnOption from "@/components/utils/ImageBtnOption";
import { useEffect, useState } from "react";
import { updateItem } from "@/redux/features/data/dataSlice";

export default function BannerForm({ bannerData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    // const [updatedImageUrl, setUpdatedImageUrl] = useState();
    const { createBanner } = useCreate();
    const { updateBanner } = useUpdate();
    const { imageUrl } = useSelector((store) => store.image);
    const { isEdit } = useSelector((store) => store.status);
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
    const handleSubmitBanner = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const urlImage = formData.get("imageUrl");
        const newImageUrl = imageUrl ? imageUrl : urlImage;

        if (bannerData) {
            dispatch(getImageUrl(newImageUrl));

            const imageUrlPayload = newImageUrl
                ? newImageUrl
                : bannerData.imageUrl;

            updateBanner(bannerData.id, {
                name,
                imageUrl: imageUrlPayload,
            });
            dispatch(updateItem(bannerData));

            dispatch(changeEditStatus());
            // router.back();
        } else {
            dispatch(getImageUrl(newImageUrl));
            createBanner({ name, imageUrl: newImageUrl });
            dispatch(changeCreateSatus());
            // router.back();
        }

        // dispatch(deleteImageUrl());
        // router.push("/dashboard");
    };

    return (
        <div className="w-full container mx-auto flex flex-col py-16  items-center ">
            <div className=" w-3/4 mb-4 rounded-lg">
                <ImagePreview figureUrl={bannerData?.imageUrl} />
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
        </div>
    );
}
