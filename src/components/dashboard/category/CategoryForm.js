"use client";
import { useDispatch, useSelector } from "react-redux";
import ImagePreview from "../../utils/ImagePreview";
import UploadImage from "../../utils/UploadImage";
import useCreate from "@/hooks/useCreate";
import { useRouter } from "next/navigation";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import { useState } from "react";
import { handleCategoryForm } from "@/utils/handleInputForm";
import useUpdate from "@/hooks/useUpdate";
import {
    changeCreateSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
changeCreateSatus;

export default function CategoryForm({ categoryData }) {
    const [isHaveImageUrl, setIsHaveImageUrl] = useState(false);
    const [isUploadImage, setIsUploadImage] = useState(false);
    const { createCategory } = useCreate();
    const { updateCategory } = useUpdate();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (categoryData) {
            updateCategory(categoryData.id, {
                name: formData.get("name"),
                imageUrl: categoryData.imageUrl,
            });
            dispatch(changeEditStatus());
            router.back();
        } else {
            createCategory(handleCategoryForm(formData, imageUrl));
            dispatch(changeCreateSatus());
            router.back();
        }

        // dispatch(deleteImageUrl());
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            <div>
                <button onClick={handleUploadImage}>Upload Image</button>
                <button onClick={handleHaveImageUrl}>Have Image Url</button>
            </div>
            {isUploadImage || categoryData ? (
                <div className="w-1/2 self-center">
                    <ImagePreview
                        figureUrl={categoryData && categoryData?.imageUrl}
                    />
                    <UploadImage />
                </div>
            ) : (
                ""
            )}
            <form onSubmit={handleSubmit} className="self-center w-1/2">
                <input
                    defaultValue={categoryData ? categoryData?.name : ""}
                    name="name"
                    className="w-full focus:outline-none py-2 mb-2 "
                    placeholder="Category Name"
                />
                {isHaveImageUrl && (
                    <input name="imageUrl" placeholder="Image Url" />
                )}
                <div>
                    <button
                        type="submit"
                        className="bg-slate-500 text-sm text-white py-2  px-4 rounded-2xl w-1/2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
