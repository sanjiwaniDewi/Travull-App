"use client";

import { changeEditStatus } from "@/redux/features/edit/editSilce";
import {
    changeModalStatus,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import {
    handleDeleteItem,
    handleUpdateRoute,
} from "@/utils/handleActionButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

export default function ActionButtons({ id, type, handler }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleShowModal = () => {
        dispatch(changeModalStatus());
        handler(id, type);
    };
    const handleDelete = () => {
        handleDeleteItem(id, type);
    };

    const handleEdit = () => {
        dispatch(changeEditStatus());
        router.push(handleUpdateRoute(id, type));
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
                <button
                    onClick={handleEdit}
                    className="bg-slate-500 text-sm text-white p-2 rounded-2xl"
                >
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
