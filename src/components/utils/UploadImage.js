"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setImagesUrls, uploadImage } from "@/redux/features/upload/imageSlice";
import ProfieImage from "../profile/ProfileImage";

export default function UploadImage({
    handleMultiple,
    customStyleBtn,
    customStyleInput,
}) {
    const imageUploadRef = useRef();
    const { imageUrl } = useSelector((store) => store.image);

    const dispatch = useDispatch();

    const handleUploadImage = (e) => {
        e.preventDefault();
        const uploadedImage = imageUploadRef.current.files[0];
        const formData = new FormData();
        formData.append("image", uploadedImage);
        try {
            dispatch(uploadImage(formData));
        } catch (err) {}
        if (handleMultiple) {
            handleMultiple();
        }
    };
    // const handleMultileImage = () => {
    //     if (imageUrl) {
    //         dispatch(setImagesUrls(imageUrl));
    //     }
    // };

    // useEffect(() => {
    //     handleMultileImage();
    // }, [imageUrl]);

    return (
        <form
            onSubmit={handleUploadImage}
            encType="multipart/form-data"
            className="flex flex-row justify-center gap-x-1 w-full"
        >
            <input
                type="file"
                name="image"
                className={`self-center col-span-2 w-full py-3 px-3 rounded-xl ${customStyleInput}`}
                ref={imageUploadRef}
            />
            <div className="flex justify-start">
                <button type="submit" className={customStyleBtn}>
                    upload
                </button>
            </div>
        </form>
    );
}
