"use client";
import { useState } from "react";
import RoleModal from "../dashboard/user/RoleModal";
import { useDispatch, useSelector } from "react-redux";
import { setCangeRoleDataUser } from "@/redux/features/role/roleSlice";
import {
    changeModalStatus,
    setModalData,
    setModalType,
} from "@/redux/features/modal/modalSlice";

export default function ChangeRole({ userData }) {
    // const [showModal, SetShowModal] = useState(false);
    const dispatch = useDispatch();
    // const userData = useSelector((state) => state.role);

    function handleShowModal() {
        dispatch(setCangeRoleDataUser(userData));
        dispatch(changeModalStatus());
        // dispatch(setModalData({ ...userData }));
        dispatch(setModalType("changeRole"));
        // SetShowModal(!showModal);
    }

    return (
        <div>
            <button
                onClick={handleShowModal}
                className="block px-4 py-2 text-sm font-semibold bg-primary-200 text-secondary-200 rounded-2xl  hover:bg-secondary-200 hover:text-primary-200"
            >
                Change Role
            </button>
        </div>
    );
}
