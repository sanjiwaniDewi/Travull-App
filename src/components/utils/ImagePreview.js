"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default function ImagePreview({ figureUrl, customHeigh, resetImage }) {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);

    const handleshowFigure = () => {
        if (figureUrl) setNewImage(figureUrl);
    };

    useEffect(() => {
        handleshowFigure();
    }, [figureUrl]);

    useEffect(() => {
        handleshowFigure();
    }, []);

    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div>
            {figureUrl || imageUrl ? (
                <div
                    className={`flex justify-center mb-3 ${
                        customHeigh ? customHeigh : "h-96"
                    }`}
                >
                    <img
                        src={newImage}
                        alt="image"
                        className={`w-full object-cover rounded-3xl ${
                            customHeigh ? customHeigh : "h-96"
                        }`}
                    />
                </div>
            ) : (
                <div className="h-96 flex justify-center items-center content-center">
                    <p className="text-lg font-bold text-slate-300">No Image</p>
                </div>
            )}
        </div>
    );
}
