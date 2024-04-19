"use client";
import { formatDate } from "@/utils/handleFormatData";
import { useSelector } from "react-redux";

export default function DetailCategory() {
    const { modalData } = useSelector((state) => state.modal);
    console.log(modalData);
    return (
        <div>
            <img
                src={modalData.imageUrl}
                className="w-96 object-cover"
                alt="Category image"
            />
            <h1 className="text-2xl font-bold mb-3 mt-2">{modalData.name}</h1>
            <div className="flex gap-2 ">
                <p>Dibuat : {formatDate(modalData.createdAt)}</p>
                <p>Diupdate: {formatDate(modalData.updatedAt)}</p>
            </div>
        </div>
    );
}
