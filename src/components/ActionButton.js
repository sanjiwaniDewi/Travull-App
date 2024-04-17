"use client";

import {
    changeModalStatus,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import handleDeleteItem from "@/utils/handleDeleteItem";

import { useDispatch } from "react-redux";

export default function ActionButtons({ id, type, handler }) {
    const dispatch = useDispatch();

    const handleShowModal = () => {
        dispatch(changeModalStatus());
        handler(id, type);
    };
    const handleDelete = () => {
        handleDeleteItem(id, type);
    };
    return (
        <>
            <div className="flex flex-row  gap-x-3">
                <button
                    className="bg-slate-500 text-sm text-white p-2 rounded-2xl"
                    onClick={handleShowModal}
                >
                    Detail
                </button>
                <button className="bg-slate-500 text-sm text-white p-2 rounded-2xl">
                    Edit
                </button>
                <button
                    className="bg-slate-500 text-sm text-white p-2 rounded-2xl"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </>
    );
}
