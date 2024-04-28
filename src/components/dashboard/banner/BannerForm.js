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
    const { isUpdate, isCreate } = useSelector((store) => store.status);
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
            try {
                updateBanner(bannerData.id, {
                    name,
                    imageUrl: imageUrlPayload,
                });

                dispatch(changeEditStatus());
                dispatch(updateItem(bannerData));
            } catch (err) {}
            dispatch(deleteImageUrl());
            router.back();

            // router.back();
        } else {
            dispatch(getImageUrl(newImageUrl));
            createBanner({ name, imageUrl: newImageUrl });

            dispatch(deleteImageUrl());
            dispatch(changeCreateSatus());
            router.back();

            // router.back();
        }

        //
        // router.push("/dashboard");
    };

    return (
        <div className="w-full container mx-auto flex flex-col py-16  items-center ">
            <div className=" w-3/4 mb-4 rounded-lg">
                <ImagePreview figureUrl={bannerData?.imageUrl} />
            </div>
            <div className=" lg:w-1/3 w-3/4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-y-2">
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
                        onSubmit={handleSubmitBanner}
                        className="self-center w-11/12 flex flex-col gap-y-1"
                    >
                        <label className="text-sm font-semibold">
                            Nama banner
                        </label>
                        <input
                            defaultValue={bannerData ? bannerData?.name : ""}
                            name="name"
                            className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                            placeholder="Nama Banner"
                        />
                        {isHaveImageUrl && (
                            <div>
                                <label className="text-sm font-semibold">
                                    Url Gambar
                                </label>
                                <input
                                    defaultValue={
                                        bannerData ? bannerData?.imageUrl : ""
                                    }
                                    name="imageUrl"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300  "
                                    placeholder="Banner image url"
                                />
                            </div>
                        )}
                        <div className="flex justify-center">
                            <button
                                type="submit"
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
