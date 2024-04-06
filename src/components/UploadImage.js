"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";

export default function UploadImage({ image }) {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);
    const imageUploadRef = useRef();

    const loadedImage = () => {
        setNewImage(image);
    };

    useEffect(() => {
        loadedImage();
    }, [image]);

    const dispatch = useDispatch();

    const handleUploadImage = (e) => {
        e.preventDefault();
        const uploadedImage = imageUploadRef.current.files[0];
        const formData = new FormData();
        formData.append("image", uploadedImage);
        dispatch(uploadImage(formData));
    };

    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div className="flex flex-col md:w-96 w-full">
            <div className="flex justify-center">
                <img
                    src={newImage}
                    alt="avatar"
                    className="rounded-full w-80 object-cover "
                />
            </div>

            <form
                onSubmit={handleUploadImage}
                encType="multipart/form-data"
                className="grid  grid-cols-3 gap-x-1"
            >
                <input
                    type="file"
                    name="image"
                    className="self-center bg-slate-200 col-span-2"
                    ref={imageUploadRef}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="text-sm font-bold rounded-xl px-5 py-2 bg-slate-500 text-white  w-full"
                    >
                        upload
                    </button>
                </div>
            </form>
        </div>
    );
}
