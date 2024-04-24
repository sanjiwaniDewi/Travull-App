"use client";
import {
    changeModalStatus,
    clearModalData,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CloseBtnModal() {
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(changeModalStatus());
        dispatch(clearModalData());
        dispatch(setModalType(""));
    };
    return <button onClick={handleCloseModal}>Close</button>;
}
