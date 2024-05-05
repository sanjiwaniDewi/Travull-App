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
    const [category, setCategory] = useState();
    const [isMultipleImage, setIsMultipleImage] = useState(false);
    const [isMultipleUrl, setIsMultipleUrl] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

    const { getAllCategoryData } = useGetAllData();
    const {
        createActivity,
        loading: loadingCreate,
        success: successCreate,
        err: errorCreate,
    } = useCreate();
    const {
        updateActivity,
        loading: loadingUpdate,
        success: successUpdate,
        err: errorUpdate,
    } = useUpdate();

    const { imageUrl, imageUrls } = useSelector((store) => store.image);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleImageUrlsOnEdit = () => {
        if (imageUrls.length === 0 && activityData?.imageUrls) {
            dispatch(setImagesUrls(activityData?.imageUrls));
        }
    };

    useEffect(() => {
        handleImageUrlsOnEdit();
    }, [activityData]);

    // set imageurls setelah upload
    const handdleaddImageUrl = () => {
        if (imageUrl) {
            dispatch(setImagesUrls(imageUrl));
        }
    };

    useEffect(() => {
        handdleaddImageUrl();
    }, [imageUrl]);

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

    console.log(errorMessage);
    useEffect(() => {
        handleErrorMessage();
    }, [errorCreate, errorUpdate]);

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

    const handleChangeActivityForm = () => {
        setErrorMessage("");
    };

    const handleSumitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const urlImage = formData.get("imageUrl");
        const newImageUrls = imageUrls ? imageUrls : urlImage;

        if (activityData) {
            const imageUrlPayload =
                imageUrls.length !== 0 ? imageUrls : activityData?.imageUrls;

            updateActivity(
                activityData.id,
                handleActivityForm(formData, imageUrlPayload)
            );
        } else {
            createActivity(handleActivityForm(formData, newImageUrls));
        }
    };

    const handleReset = () => {
        dispatch(deleteImageUrl());
    };

    const handleSuccsess = () => {
        if (successCreate || successUpdate) {
            dispatch(deleteImageUrl());
            router.push("/dashboard/activity");
        }
    };

    useEffect(() => {
        handleSuccsess();
    }, [successCreate, successUpdate]);

    return (
        <div className="w-full px-5 container mx-auto flex flex-col py-16  items-center ">
            {imageUrls.length !== 0 ? (
                <div className=" lg:w-1/2 w-full mb-4 rounded-lg">
                    {imageUrls?.length > 1 ? (
                        <ImageCarousel
                            images={
                                imageUrls.length !== 0
                                    ? imageUrls
                                    : activityData?.imageUrls
                            }
                            height={"h-96"}
                            customDots={true}
                        />
                    ) : (
                        <ImagePreview
                            figureUrl={
                                imageUrls.length !== 0
                                    ? imageUrls?.join("")
                                    : activityData?.imageUrls.join("")
                            }
                            resetImage={true}
                        />
                    )}
                </div>
            ) : (
                <div className=" lg:w-1/2 w-full mb-4 rounded-lg h-96">
                    <div className="flex justify-center h-full items-center">
                        <p className="text-lg font-bold text-slate-300">
                            Tidak ada gambar
                        </p>
                    </div>
                </div>
            )}

            <div className=" lg:w-1/2 w-full mt-4 p-6 bg-white border shadow-md border-gray-200 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <div className="w-11/12 self-center">
                        <div className="flex gap-x-2 justify-center mb-4 ">
                            <button
                                className=" text-sm  flex justify-center  py-2 px-2 rounded-xl font-semibold bg-primary-200 text-secondary-200 hover:text-primary-200 hover:bg-secondary-200 hover:scale-105"
                                onClick={handleReset}
                            >
                                Hapus Gambar
                            </button>

                            <div className=" flex justify-center gap-x-8">
                                <AddButton
                                    handleAddItem={handleMultipleImage}
                                    type="Gambar"
                                    isMultipleImage={!isMultipleImage}
                                />
                            </div>
                        </div>

                        {!isMultipleImage && (
                            <div className="">
                                <label className="text-sm font-semibold">
                                    Upload Gambar
                                </label>
                                <UploadImage
                                    handleMultiple={handleMultipleImage}
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
                    </div>

                    <form
                        onSubmit={handleSumitForm}
                        className="self-center lg:w-11/12 w-full flex flex-col gap-y-1"
                        onChange={handleChangeActivityForm}
                    >
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                                <label className="text-sm font-semibold">
                                    Judul Aktivitas
                                </label>
                                <div className="flex flex-col">
                                    <input
                                        defaultValue={activityData?.title}
                                        name="title"
                                        placeholder="Judul Aktivitas"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("title")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("title")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start mt-0 pt-0 font-medium ">
                                                Judul promo tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold gap-y-0 h-fit">
                                    Deskripsi{" "}
                                </label>
                                <div className="flex flex-col">
                                    <textarea
                                        defaultValue={activityData?.description}
                                        name="description"
                                        placeholder="Description"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("description")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    ></textarea>
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("description")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm font-medium text-start pt-0 ">
                                                Deskripsi tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Destinasi{" "}
                                </label>
                                <div className="flex flex-col">
                                    <select
                                        value={
                                            category
                                                ? category
                                                : activityData?.categoryId
                                        }
                                        name="category"
                                        onChange={handleChangeCategory}
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("categoryId")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    >
                                        <option value="category">
                                            Destinasi
                                        </option>
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
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("categoryId")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start pt-0 mt-0 font-medium">
                                                Destinasi tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Harga{" "}
                                </label>
                                <div className="flex flex-col">
                                    <input
                                        defaultValue={activityData?.price}
                                        name="price"
                                        type="number"
                                        placeholder="Harga"
                                        className={`w-full focus:outline-primary-200 py-3 mb-0 bg-secondary-200 bg-opacity-30 px-3 rounded-xl ${
                                            errorMessage &&
                                            errorMessage?.filter((e) =>
                                                e.includes("price")
                                            ).length !== 0
                                                ? "outline outline-1 outline-red-600"
                                                : "outline outline-1 outline-slate-300"
                                        }  `}
                                    />
                                    {errorMessage &&
                                        errorMessage.filter((e) =>
                                            e.includes("price")
                                        ).length !== 0 && (
                                            <p className="text-red-600 text-sm flex text-start pt-0 mt-0 font-medium ">
                                                Harge tidak boleh kosong
                                            </p>
                                        )}
                                </div>

                                <label className="text-sm font-semibold">
                                    Diskon{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.price_discount}
                                    name="priceDiscount"
                                    type="number"
                                    placeholder="Harga Diskon"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Rating{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.rating}
                                    name="rating"
                                    type="number"
                                    placeholder="Rating"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Total Review{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.total_reviews}
                                    name="totalReviews"
                                    type="number"
                                    placeholder="Total Review"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Fasilitas{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.facilities}
                                    name="facilities"
                                    placeholder="Fasilitas"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Kota{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.city}
                                    name="city"
                                    placeholder="Kota"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Provinsi{" "}
                                </label>
                                <input
                                    defaultValue={activityData?.province}
                                    name="province"
                                    placeholder="Provinsi"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Alamat lengkap{" "}
                                </label>
                                <textarea
                                    defaultValue={activityData?.address}
                                    name="address"
                                    placeholder="Alamat lengap"
                                    className="w-full focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                />

                                <label className="text-sm font-semibold">
                                    Peta lokasi{" "}
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
