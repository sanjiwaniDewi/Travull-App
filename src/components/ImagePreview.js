"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
export default function ImagePreview({ figureUrl }) {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);

    // const handleshowFigure = () => {
    //     if (figureUrl) setNewImage(figureUrl);
    // };
    // useEffect(() => {
    //     handleshowFigure();
    // }, []);

    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div className="flex justify-center h-96 mb-3">
            <img
                src={figureUrl ? figureUrl : imageUrl}
                alt="avatar"
                className=""
            />
        </div>
    );
}
