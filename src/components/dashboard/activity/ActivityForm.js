"use client";
import { useEffect, useState } from "react";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector } from "react-redux";
import AddButton from "../../utils/AddButton";
import ImageCarousel from "../../utils/ImageCarousel";
import { handleActivityForm } from "@/utils/handleInputForm";
import useCreate from "@/hooks/useCreate";
import useUpdate from "@/hooks/useUpdate";

export default function ActivityForm({ activityData }) {
    const [categories, setCategories] = useState();
    const [isMultipleImage, setIsMultipleImage] = useState(false);
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(false);
    const { getAllCategoryData } = useGetAllData();
    const { imageUrl } = useSelector((store) => store.image);
    const { createActivity } = useCreate();
    const { updateActivity } = useUpdate();
    const handleHaveImageUrl = () => {
        setIsHaveImageUrl(true);
        setIsUploadImage(false);
    };
    const handleUploadImage = () => {
        setIsUploadImage(true);
        setIsHaveImageUrl(false);
    };
    const handleCategoriesData = async () => {
        const res = await getAllCategoryData();
        setCategories(res);
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

        if (activityData) {
            const figureUrl = imageUrl ? imageUrl : activityData?.imageUrls;
            updateActivity(
                activityData.id,
                handleActivityForm(formData, figureUrl)
            );

            // const payload = handleActivityForm(formData, figureUrl);
            // console.log(payload);
        } else {
            createActivity(handleActivityForm(formData, imageUrl));
        }
    };

    return (
        <div className="w-full">
            <div>
                <button onClick={handleUploadImage}>Upload Image</button>
                <button onClick={handleHaveImageUrl}>Have Image Url</button>
            </div>
            {isUploadImage && (
                <div className="w-1/2 self-center">
                    {imageUrl && typeof imageUrl === "string" ? (
                        <ImagePreview figureUrl={activityData?.imageUrl} />
                    ) : (
                        <ImageCarousel
                            images={
                                imageUrl ? imageUrl : activityData?.imageUrls
                            }
                        />
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
                <input
                    defaultValue={activityData?.title}
                    name="title"
                    placeholder="Title"
                />
                {isHaveImageUrl && (
                    <div>
                        <input
                            defaultValue={activityData?.imageUrls}
                            name="imageUrl"
                            placeholder="Image Url"
                        />
                    </div>
                )}
                <input
                    defaultValue={activityData?.description}
                    name="description"
                    placeholder="Description"
                />
                <select value={activityData?.category?.id} name="category">
                    <option value="category">category</option>
                    {categories &&
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {" "}
                                {category.name}
                            </option>
                        ))}
                </select>
                <input
                    defaultValue={activityData?.price}
                    name="price"
                    placeholder="Price"
                />
                <input
                    defaultValue={activityData?.price_discount}
                    name="priceDiscount"
                    placeholder="Price Discount"
                />
                <input
                    defaultValue={activityData?.rating}
                    name="rating"
                    placeholder="Rating"
                />
                <input
                    defaultValue={activityData?.total_reviews}
                    name="totalReviews"
                    placeholder="Total Reviews"
                />
                <input
                    defaultValue={activityData?.facilities}
                    name="facilities"
                    placeholder="Facilities"
                />
                <input
                    defaultValue={activityData?.city}
                    name="city"
                    placeholder="City"
                />
                <input
                    defaultValue={activityData?.province}
                    name="province"
                    placeholder="Province"
                />
                <textarea
                    defaultValue={activityData?.address}
                    name="address"
                    placeholder="Detail Address"
                />
                <textarea
                    defaultValue={activityData?.location_maps}
                    name="locationMaps"
                    placeholder="Location Maps"
                />

                <button
                    type="submit"
                    className="bg-slate-500 text-sm text-white p-2 rounded-2xl"
                    disabled={!isHaveImageUrl && !isUploadImage}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
