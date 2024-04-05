"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
    const [image, setImage] = useState("/Avatar-Image.png");

    // const imageUploadRef = useRef();

    const dispatch = useDispatch();

    // const { imageUrl } = useSelector((store) => store.image);

    // const handleUploadImage = (e) => {
    //     e.preventDefault();
    //     const uploadedImage = imageUploadRef.current.files[0];
    //     const formData = new FormData();
    //     formData.append("image", uploadedImage);
    //     dispatch(uploadImage(formData));
    //     setImage(imageUrl);
    // };

    // const handleImageChange = () => {
    //     if (imageUrl) setImage(imageUrl);
    // };

    // useEffect(() => {
    //     handleImageChange();
    // }, [imageUrl]);

    return (
        <>
            <h1>ini page Register</h1>
            {/* <img src={image} alt="avatar" />
            <form onSubmit={handleUploadImage} encType="multipart/form-data">
                <input type="file" name="image" ref={imageUploadRef} />

                <button
                    type="submit"
                    className="bg-slate-50 px-10 py-2 text-black"
                >
                    upload
                </button>
            </form> */}
            <RegisterForm />
        </>
    );
}
