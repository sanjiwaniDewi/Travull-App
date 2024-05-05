"use client";

import { useDispatch } from "react-redux";
import { setCangeRoleDataUser } from "@/redux/features/role/roleSlice";
import {
    changeModalStatus,
    setModalType,
} from "@/redux/features/modal/modalSlice";

export default function ChangeRole({ userData }) {
    const dispatch = useDispatch();

    function handleShowModal() {
        dispatch(setCangeRoleDataUser(userData));
        dispatch(changeModalStatus());
        dispatch(setModalType("changeRole"));
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
