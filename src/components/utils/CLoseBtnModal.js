"use client";
import {
    changeModalStatus,
    clearModalData,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";

export default function CloseBtnModal() {
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(changeModalStatus());
        dispatch(clearModalData());
        dispatch(setModalType(""));
    };
    return (
        <div className="w-full flex justify-end mb-4">
            <button onClick={handleCloseModal}>
                <GrClose />
            </button>
        </div>
    );
}
