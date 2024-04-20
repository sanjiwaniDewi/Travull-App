"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
export default function ImagePreview({ figureUrl }) {
    const [newImage, setNewImage] = useState("");
    const { imageUrl } = useSelector((store) => store.image);
    const dispatch = useDispatch();

    const handleshowFigure = () => {
        if (figureUrl) setNewImage(figureUrl);
    };
    useEffect(() => {}, []);

    const handleFirstLoad = () => {
        if (imageUrl) {
            dispatch(deleteImageUrl());
        }
    };

    useEffect(() => {
        handleFirstLoad();
        handleshowFigure();
    }, []);

    const handleImageChange = () => {
        if (imageUrl) setNewImage(imageUrl);
    };

    useEffect(() => {
        handleImageChange();
    }, [imageUrl]);

    return (
        <div className="flex justify-center h-96 mb-3">
            <img src={newImage} alt="avatar" className="" />
        </div>
    );
}
