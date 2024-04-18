"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
export default function ImagePreview() {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);

    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div className="flex justify-center h-96 mb-3">
            {newImage && <img src={newImage} alt="avatar" className="" />}
        </div>
    );
}
