"use client";
import { useEffect, useState } from "react";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
import AddButton from "../../utils/AddButton";
import ImageCarousel from "../../utils/ImageCarousel";
import { handleActivityForm } from "@/utils/handleInputForm";
import useCreate from "@/hooks/useCreate";
import useUpdate from "@/hooks/useUpdate";
import {
    getImageUrl,
    deleteImageUrl,
    setImagesUrls,
} from "@/redux/features/upload/imageSlice";
import { updateItem } from "@/redux/features/data/dataSlice";
import ImageBtnOption from "@/components/utils/ImageBtnOption";
import {
    changeCreateSatus,
    changeEditStatus,
    changeDeleteSatus,
} from "@/redux/features/status/statusSilce";
import { useRouter } from "next/navigation";

export default function ActivityForm({ activityData }) {
    const [categories, setCategories] = useState();
    const [newImageUrls, setNewImageUrls] = useState();
    const [category, setCategory] = useState();
    const [isMultipleImage, setIsMultipleImage] = useState(false);
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(true);
    const { getAllCategoryData } = useGetAllData();
    const { imageUrl, imageUrls } = useSelector((store) => store.image);
    const { createActivity } = useCreate();
    const { updateActivity } = useUpdate();

    const dispatch = useDispatch();
    const router = useRouter();

    const { isCreate } = useSelector((store) => store.status);

    //hapus image url jika ada image url di hooks
    const deleteImageWhenCreate = () => {
        if (imageUrl || imageUrls) {
            dispatch(deleteImageUrl());
        }
    };

    useEffect(() => {
        deleteImageWhenCreate();
    }, []);

    // set imageurls setelah upload
    const handdleaddImageUrl = () => {
        if (imageUrl) {
            dispatch(setImagesUrls(imageUrl));
        }
    };

    useEffect(() => {
        handdleaddImageUrl();
    }, [imageUrl]);

    const handleHaveImageUrl = () => {
        if (isCreate) {
            dispatch(deleteImageUrl());
        }

        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        if (isCreate) {
            dispatch(deleteImageUrl());
        }

        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };
    const handleCategoriesData = async () => {
        const res = await getAllCategoryData();
        setCategories(res);
    };

    useEffect(() => {
        handleCategoriesData();
    }, []);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleMultipleImage = () => {
        setIsMultipleImage(!isMultipleImage);
    };

    const handleSumitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const urlImage = formData.get("imageUrl");
        const newImageUrls = imageUrls ? imageUrls : urlImage;

        if (activityData) {
            // dispatch(setImagesUrls(newImageUrls));
            if (isHaveImageUrl) {
                dispatch(deleteImageUrl());
                dispatch(setImagesUrls(urlImage));
            }
            const imageUrlPayload =
                imageUrls.length !== 0 ? imageUrls : activityData?.imageUrls;
            updateActivity(
                activityData.id,
                handleActivityForm(formData, imageUrlPayload, isHaveImageUrl)
            );
            dispatch(updateItem(activityData));
            dispatch(changeEditStatus());
            router.back();

            // console.log("imageurl", imageUrlPayload);
            // const payload = handleActivityForm(formData, imageUrlPayload);
            // console.log(payload);
        } else {
            // dispatch(setImagesUrls(newImageUrls));
            // const payload = handleActivityForm(formData, newImageUrls);
            // console.log(payload);

            if (isHaveImageUrl) {
                dispatch(setImagesUrls(urlImage));
            }

            createActivity(
                handleActivityForm(formData, newImageUrls, isHaveImageUrl)
            );

            dispatch(changeCreateSatus());
            router.back();
        }
    };

    return (
        <div className="w-full container mx-auto flex flex-col py-16  items-center ">
            <div className=" lg:w-1/2 w-3/4 mb-4 rounded-lg">
                {imageUrls?.length > 1 || activityData?.imageUrls.length > 1 ? (
                    <ImageCarousel
                        images={
                            imageUrls.length !== 0
                                ? imageUrls
                                : activityData?.imageUrls
                        }
                        height={"h-96"}
                    />
                ) : (
                    <ImagePreview
                        figureUrl={
                            imageUrls.length !== 0
                                ? imageUrls?.join("")
                                : activityData?.imageUrls.join("")
                        }
                    />
                )}
            </div>
            <div className=" lg:w-3/4 mt-4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <ImageBtnOption
                        haveImageUrl={handleHaveImageUrl}
                        uploadImage={handleUploadImage}
                        isHaveImageUrl={isHaveImageUrl}
                    />

                    {isUploadImage && (
                        <div className="w-11/12 self-center">
                            {!isMultipleImage ? (
                                <div className="mt-8">
                                    <label className="text-sm font-semibold">
                                        Upload Gambar
                                    </label>
                                    <UploadImage
                                        handleMultiple={handleMultipleImage}
                                        customStyleBtn={
                                            "bg-primary-200 w-full px-4 rounded-xl text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 "
                                        }
                                        customStyleInput="bg-secondary-200 bg-opacity-30 mt-1 mb-0"
                                    />
                                </div>
                            ) : (
                                <div className="mt-8">
                                    <AddButton
                                        handleAddItem={handleMultipleImage}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    <form
                        onSubmit={handleSumitForm}
                        className="self-center w-11/12 flex flex-col gap-y-1"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold">
                                    Judul Aktivitas
                                </label>
                                <input
                                    defaultValue={activityData?.title}
                                    name="title"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    placeholder="Aktivitas"
                                />
                                {isHaveImageUrl && (
                                    <div>
                                        <label className="text-sm font-semibold">
                                            Url gambar
                                        </label>
                                        <input
                                            defaultValue={
                                                activityData?.imageUrls
                                            }
                                            name="imageUrl"
                                            placeholder="Url gambar"
                                            className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                        />
                                    </div>
                                )}
                                <label className="text-sm font-semibold">
                                    Deskripsi
                                </label>
                                <input
                                    defaultValue={activityData?.description}
                                    name="description"
                                    placeholder="Description"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Destinasi
                                </label>
                                <select
                                    value={
                                        category
                                            ? category
                                            : activityData?.categoryId
                                    }
                                    name="category"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                    onChange={handleChangeCategory}
                                >
                                    <option value="category">Destinasi</option>
                                    {categories &&
                                        categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {" "}
                                                {category.name}
                                            </option>
                                        ))}
                                </select>
                                <label className="text-sm font-semibold">
                                    Harga
                                </label>
                                <input
                                    defaultValue={activityData?.price}
                                    name="price"
                                    placeholder="Harga"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Diskon
                                </label>
                                <input
                                    defaultValue={activityData?.price_discount}
                                    name="priceDiscount"
                                    placeholder="Harga Diskon"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Rating
                                </label>
                                <input
                                    defaultValue={activityData?.rating}
                                    name="rating"
                                    placeholder="Rating"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Total Review
                                </label>
                                <input
                                    defaultValue={activityData?.total_reviews}
                                    name="totalReviews"
                                    placeholder="Total Review"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Fasilitas
                                </label>
                                <input
                                    defaultValue={activityData?.facilities}
                                    name="facilities"
                                    placeholder="Fasilitas"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Kota
                                </label>
                                <input
                                    defaultValue={activityData?.city}
                                    name="city"
                                    placeholder="Kota"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Provinsi
                                </label>
                                <input
                                    defaultValue={activityData?.province}
                                    name="province"
                                    placeholder="Provinsi"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Alamat lengkap
                                </label>
                                <textarea
                                    defaultValue={activityData?.address}
                                    name="address"
                                    placeholder="Alamat lengap"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                                <label className="text-sm font-semibold">
                                    Peta lokasi
                                </label>
                                <textarea
                                    defaultValue={activityData?.location_maps}
                                    name="locationMaps"
                                    placeholder="Peta lokasi"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                            </div>
                        </div>
                        <div className="w-11/12 flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-primary-200  text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 px-4 py-3 rounded-2xl w-1/4"
                                disabled={!isHaveImageUrl && !isUploadImage}
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
