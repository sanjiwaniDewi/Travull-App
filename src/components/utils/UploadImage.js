"use client";
import { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";

import Image from "next/image";

export default function UploadImage({
    handleMultiple,
    customStyleBtn,
    customStyleInput,
    customErrorStyle,
    errorMessage,
}) {
    const [changeStyle, setChangeStyle] = useState("");
    const [isUploadImage, setIsUploadImage] = useState(false);

    const imageUploadRef = useRef();
    const dispatch = useDispatch();

    const handleChangeImage = () => {
        setIsUploadImage(false);
        setChangeStyle("outline outline-1 outline-slate-300");
    };

    const handleUploadImage = (e) => {
        e.preventDefault();
        const uploadedImage = imageUploadRef.current.files[0];
        const formData = new FormData();
        formData.append("image", uploadedImage);

        dispatch(uploadImage(formData));
        setIsUploadImage(true);

        if (handleMultiple) {
            handleMultiple();
        }
    };

    return (
        <div>
            <form
                onChange={handleChangeImage}
                onSubmit={handleUploadImage}
                encType="multipart/form-data"
                className="flex flex-row justify-center gap-x-1 w-full"
            >
                <input
                    type="file"
                    name="image"
                    className={`self-center col-span-2 w-full py-3 px-3 rounded-xl ${customStyleInput} ${
                        changeStyle ? changeStyle : customErrorStyle
                    }`}
                    ref={imageUploadRef}
                />
                <div className="flex justify-start">
                    <button type="submit" className={customStyleBtn}>
                        upload
                    </button>
                </div>
            </form>
            {errorMessage.length !== 0 && !isUploadImage && (
                <p className="text-red-600 text-sm flex w-11/12 text-start ">
                    Tambahkan gambar atau upload gambar
                </p>
            )}
        </div>
    );
}
