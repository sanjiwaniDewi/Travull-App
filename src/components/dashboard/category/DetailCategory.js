"use client";
import { formatDate } from "@/utils/handleFormatData";
import { useSelector } from "react-redux";

export default function DetailCategory() {
    const { modalData } = useSelector((state) => state.modal);

    return (
        <div className="pb-2">
            <div className="w-96 min-h-52">
                <img
                    src={modalData?.imageUrl}
                    className="w-96 object-cover rounded-xl"
                    alt="Category image"
                />
            </div>

            <h1 className="text-2xl font-bold mb-3 mt-4">{modalData?.name}</h1>
            <div className="flex gap-2 justify-between">
                <p>Dibuat : {formatDate(modalData?.createdAt)}</p>
                <p>Diupdate: {formatDate(modalData?.updatedAt)}</p>
            </div>
        </div>
    );
}
