"use client";
import { useEffect, useState } from "react";
import ImagePreview from "./ImagePreview";
import UploadImage from "./UploadImage";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector } from "react-redux";
import AddButton from "./AddButton";
import ImageCarousel from "./ImageCarousel";
import { handleActivityForm } from "@/utils/handleInputForm";
import useCreate from "@/hooks/useCreate";

export default function ActivityForm() {
    const [categories, setCategories] = useState();
    const [isMultipleImage, setIsMultipleImage] = useState(false);
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(false);
    const { getAllCategoryData } = useGetAllData();
    const { imageUrl } = useSelector((store) => store.image);
    const { createActivity } = useCreate();
    const handleHaveImageUrl = () => {
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };
    const handleCategoriesData = async () => {
        await getAllCategoryData().then((res) => setCategories(res));
    };

    const handleMultipleImage = () => {
        setIsMultipleImage(!isMultipleImage);
    };

    useEffect(() => {
        handleCategoriesData();
    }, []);

    const handleSumitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        createActivity(handleActivityForm(formData, imageUrl));
    };

    return (
        <div className="w-full">
            <div>
                <button onClick={handleUploadImage}>Upload Image</button>
                <button onClick={handleHaveImageUrl}>Have Image Url</button>
            </div>
            {isUploadImage && (
                <div className="w-1/2 self-center">
                    {typeof imageUrl === "string" ? (
                        <ImagePreview />
                    ) : (
                        <ImageCarousel images={imageUrl} />
                    )}
                    {!imageUrl || !isMultipleImage ? (
                        <div className="mt-8">
                            <UploadImage handleMultiple={handleMultipleImage} />
                        </div>
                    ) : (
                        <div className="mt-8">
                            <AddButton handleAddItem={handleMultipleImage} />
                        </div>
                    )}
                </div>
            )}
            <form onSubmit={handleSumitForm} className="flex flex-col">
                <input name="title" placeholder="Title" />
                {isHaveImageUrl && (
                    <div>
                        <input name="imageUrl" placeholder="Image Url" />
                    </div>
                )}
                <input name="description" placeholder="Description" />
                <select name="category">
                    <option value="category">category</option>
                    {categories &&
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {" "}
                                {category.name}
                            </option>
                        ))}
                </select>
                <input name="price" placeholder="Price" />
                <input name="priceDiscount" placeholder="Price Discount" />
                <input name="rating" placeholder="Rating" />
                <input name="totalReviews" placeholder="Total Reviews" />
                <input name="facilities" placeholder="Facilities" />
                <input name="city" placeholder="City" />
                <input name="province" placeholder="Province" />
                <textarea name="address" placeholder="Detail Address" />
                <textarea name="locationMaps" placeholder="Location Maps" />

                <button
                    type="submit"
                    className="bg-slate-500 text-sm text-white p-2 rounded-2xl"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
