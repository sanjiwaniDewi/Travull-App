"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
export default function ProfieImage({ image }) {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);

    const dispatch = useDispatch();

    const handleFirstLoad = () => {
        if (imageUrl) {
            dispatch(deleteImageUrl());
        }
    };

    useEffect(() => {
        handleFirstLoad();
    }, []);

    const loadedImage = () => {
        setNewImage(image);
    };

    useEffect(() => {
        loadedImage();
    }, [image]);
    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div className="flex justify-center mb-3">
            {newImage && (
                <img
                    src={newImage}
                    alt="avatar"
                    className="rounded-3xl w-80 h-80 object-cover "
                />
            )}
        </div>
    );
}
