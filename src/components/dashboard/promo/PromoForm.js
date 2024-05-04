"use client";
import { useEffect, useState } from "react";
import { handlePromoForm } from "@/utils/handleInputForm";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import { updateItem } from "@/redux/features/data/dataSlice";

import ImageBtnOption from "@/components/utils/ImageBtnOption";
import useCreate from "@/hooks/useCreate";
import useUpdate from "@/hooks/useUpdate";
import UploadImage from "../../utils/UploadImage";
import ImagePreview from "../../utils/ImagePreview";

export default function PromoForm({ promoData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const { imageUrl } = useSelector((store) => store.image);
    const {
        createPromo,
        loading: loadingCreate,
        err: errorCreate,
        success: successCreate,
    } = useCreate();
    const {
        updatePromo,
        loading: loadingUpdate,
        err: errorUpdate,
        success: successUpdate,
    } = useUpdate();

    const dispatch = useDispatch();
    const router = useRouter();

    //choose have imageurl
    const handleHaveImageUrl = () => {
        dispatch(deleteImageUrl());
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };

    //choose upload image
    const handleUploadImage = () => {
        dispatch(deleteImageUrl());
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

    const handleChangePromoForm = () => {
        setErrorMessage("");
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (promoData) {
            const figureUrl = imageUrl ? imageUrl : promoData?.imageUrl;
            updatePromo(
                promoData.id,
                handlePromoForm(formData, figureUrl, isHaveImageUrl)
            );
        } else {
            createPromo(handlePromoForm(formData, imageUrl));
        }
    };

    const handleSuccsess = () => {
        if (successCreate || successUpdate) {
            dispatch(deleteImageUrl());
            router.push("/dashboard/promo");
        }
    };

    useEffect(() => {
        handleSuccsess();
    }, [successCreate, successUpdate]);

    return (
        <div className="w-full container mx-auto flex flex-col lg:py-5 py-20 items-center ">
            <div className=" w-3/4 mb-4 rounded-lg">
                {isUploadImage && (
                    <ImagePreview figureUrl={promoData?.imageUrl} />
                )}
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
                                customStyleBtn={` bg-primary-200 w-full px-4 rounded-xl text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 `}
                                customStyleInput="bg-secondary-200 bg-opacity-30 mt-1 mb-0 outline outline-1 outline-slate-300"
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
                        onSubmit={handleSubmitForm}
                        onChange={handleChangePromoForm}
                        className="self-center w-11/12 gap-y-1"
                    >
                        <div className="lg:grid lg:grid-cols-2  gap-x-4 pb-8">
                            <div>
                                <label className="text-sm font-semibold">
                                    Judul Promo
                                </label>
                                <div className="mb-2">
                                    <input
                                        defaultValue={promoData?.title}
                                        name="title"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("title")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                        placeholder="Judul Promo"
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("title")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Judul promo tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                {isHaveImageUrl && (
                                    <div className="mb-2">
                                        <label className="text-sm font-semibold">
                                            Url gambar
                                        </label>
                                        <div>
                                            <input
                                                defaultValue={
                                                    promoData?.imageUrl
                                                }
                                                name="imageUrl"
                                                className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                                    errorMessage &&
                                                    errorMessage?.filter((e) =>
                                                        e.includes("imageUrl")
                                                    ).length !== 0
                                                        ? "outline outline-1 outline-red-600"
                                                        : "outline outline-1 outline-slate-300"
                                                }  `}
                                                placeholder="Url gambar"
                                            />
                                            {errorMessage &&
                                                errorMessage.filter((e) =>
                                                    e.includes("imageUrl")
                                                ).length !== 0 && (
                                                    <p className="text-red-600 text-sm flex text-start ">
                                                        Url Gambar tidak boleh
                                                        kosong
                                                    </p>
                                                )}
                                        </div>
                                    </div>
                                )}

                                <label className="text-sm font-semibold">
                                    Kode Promo
                                </label>

                                <div className="mb-2">
                                    <input
                                        defaultValue={promoData?.promo_code}
                                        name="promoCode"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("promo_code")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                        placeholder="Kode promo"
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("promo_code")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Kode Promo tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Deskripsi
                                </label>
                                <div className="flex flex-col mb-2">
                                    <textarea
                                        defaultValue={promoData?.description}
                                        name="description"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("description")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                        placeholder="Deskripsi"
                                    ></textarea>
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("description")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start pt-0 ">
                                                Deskripsi tidak boleh kosong
                                            </p>
                                        )}
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold">
                                    Sarat & ketentuan
                                </label>
                                <div className="flex flex-col mb-2 ">
                                    <textarea
                                        defaultValue={
                                            promoData?.terms_condition
                                        }
                                        name="termCondition"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("terms_condition")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                        placeholder=" Sarat & Ketentuan"
                                    ></textarea>
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("terms_condition")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Sarat dan ketentuan tidak boleh
                                                kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Harga diskon
                                </label>
                                <div className="mb-2">
                                    <input
                                        defaultValue={
                                            promoData?.promo_discount_price
                                        }
                                        type="number"
                                        name="promoDiscountPrice"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes(
                                                    "promo_discount_price"
                                                )
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                        placeholder="Harga Promo"
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("promo_discount_price")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Harga promo tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Minimum Klaim
                                </label>
                                <div className="mb-2">
                                    <input
                                        defaultValue={
                                            promoData?.minimum_claim_price
                                        }
                                        type="number"
                                        placeholder="Minium Klaim Promo"
                                        name="minClaimPrice"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes(
                                                    "minimum_claim_price"
                                                )
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("minimum_claim_price")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start ">
                                                Minimum klaim promo tidak boleh
                                                kosong
                                            </p>
                                        )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
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
