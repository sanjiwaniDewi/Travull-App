"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
    deleteImageUrl,
    getImageUrl,
} from "@/redux/features/upload/imageSlice";
import { useEffect, useState } from "react";
import { checkIsEmptyInput } from "@/utils/handleFormatData";

import useUpdate from "@/hooks/useUpdate";
import ImageBtnOption from "@/components/utils/ImageBtnOption";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import useCreate from "@/hooks/useCreate";

export default function BannerForm({ bannerData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const {
        createBanner,
        loading: loadingCreate,
        err: errorCreate,
        success: successCreate,
    } = useCreate();
    const {
        updateBanner,
        loading: loadingUpdate,
        err: errorUpdate,
        success: successUpdate,
    } = useUpdate();
    const { imageUrl } = useSelector((store) => store.image);

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

    const handleErrorMessage = () => {
        if (errorCreate) {
            setErrorMessage(errorCreate.map((e) => e.message));
        }

        if (errorUpdate) {
            if (Array.isArray(errorUpdate)) {
                setErrorMessage(errorUpdate.map((e) => e.message));
            } else {
                setErrorMessage(errorUpdate.split(","));
            }
        }
    };

    useEffect(() => {
        handleErrorMessage();
    }, [errorCreate, errorUpdate]);

    const handleChangeBannerForm = () => {
        setErrorMessage(undefined);
    };

    const handleSubmitBanner = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = checkIsEmptyInput(formData.get("name"));
        const urlImage = checkIsEmptyInput(formData.get("imageUrl"));
        console.log("a", urlImage);
        console.log("aaa", imageUrl);

        if (bannerData) {
            dispatch(getImageUrl(imageUrl ? imageUrl : urlImage));
            if (isUploadImage) {
                updateBanner(bannerData.id, {
                    name,
                    imageUrl: imageUrl ? imageUrl : bannerData.imageUrl,
                });
            }

            if (isHaveImageUrl) {
                updateBanner(bannerData.id, {
                    name,
                    imageUrl: urlImage,
                });
            }
        } else {
            dispatch(getImageUrl(imageUrl ? imageUrl : urlImage));

            createBanner({
                name,
                imageUrl: isHaveImageUrl ? urlImage : imageUrl,
            });
        }
    };

    const handleSuccsess = () => {
        if (successCreate || successUpdate) {
            dispatch(deleteImageUrl());
            router.push("/dashboard/banner");
        }
    };

    useEffect(() => {
        handleSuccsess();
    }, [successCreate, successUpdate]);

    return (
        <div className="w-full container mx-auto flex flex-col lg:content-center py-20   items-center ">
            <div className=" w-3/4 mb-4 rounded-lg">
                {isUploadImage && (
                    <ImagePreview
                        figureUrl={bannerData && bannerData?.imageUrl}
                    />
                )}
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
                                customErrorStyle={`${
                                    errorMessage &&
                                    errorMessage?.filter((e) =>
                                        e.includes("imageUrl")
                                    ).length !== 0
                                        ? "outline outline-1 outline-red-600"
                                        : "outline outline-1 outline-slate-300"
                                }`}
                                errorMessage={
                                    errorMessage &&
                                    errorMessage.filter((e) =>
                                        e.includes("imageUrl")
                                    )
                                }
                            />
                        </div>
                    )}
                    <form
                        onSubmit={handleSubmitBanner}
                        className="self-center w-11/12 flex flex-col gap-y-1"
                        onChange={handleChangeBannerForm}
                    >
                        <label className="text-sm font-semibold">
                            Nama banner
                        </label>
                        <div className="mb-2">
                            <input
                                defaultValue={
                                    bannerData ? bannerData?.name : ""
                                }
                                name="name"
                                placeholder="Nama Banner"
                                className={`w-full focus:outline-primary-200  py-3 mb-0 bg-secondary-200  bg-opacity-30 px-3 rounded-xl ${
                                    errorMessage &&
                                    errorMessage?.filter((e) =>
                                        e.includes("name")
                                    ).length !== 0
                                        ? "outline outline-1 outline-red-600"
                                        : "outline outline-1 outline-slate-300"
                                }  `}
                            />
                            {errorMessage &&
                                errorMessage.filter((e) => e.includes("name"))
                                    .length !== 0 && (
                                    <p className="text-red-600 text-sm flex text-start ">
                                        Nama Banner tidak boleh kosong
                                    </p>
                                )}
                        </div>

                        {isHaveImageUrl && (
                            <div className="mb-2">
                                <label className="text-sm font-semibold">
                                    Url Gambar
                                </label>
                                <div>
                                    <input
                                        defaultValue={
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("imageUrl")
                                            ).length === 0
                                                ? bannerData?.imageUrl
                                                : undefined
                                        }
                                        name="imageUrl"
                                        placeholder="Banner image url"
                                        className={`w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("imageUrl")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("imageUrl")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Url Gambar tidak boleh kosong
                                            </p>
                                        )}
                                </div>
                            </div>
                        )}
                        <div className="flex justify-center mt-2">
                            <button
                                type="submit"
                                disabled={!isHaveImageUrl && !isUploadImage}
                                className="bg-primary-200  text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 px-4 py-3 rounded-2xl w-1/4"
                            >
                                {loadingCreate || loadingUpdate
                                    ? "Loading..."
                                    : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
