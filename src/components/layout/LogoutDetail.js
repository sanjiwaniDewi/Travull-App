"use client";
import { logout } from "@/redux/features/auth/authSlice";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
    changeModalStatus,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import { clearRoleUserData } from "@/redux/features/role/roleSlice";
import { TiWarningOutline } from "react-icons/ti";

export default function LogoutDetail() {
    const route = useRouter();
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(changeModalStatus());
        dispatch(clearRoleUserData());
        dispatch(setModalType(""));
    };
    const handleLogout = () => {
        dispatch(logout());
        dispatch(changeModalStatus());
        dispatch(clearRoleUserData());
        dispatch(setModalType(""));
        setTimeout(() => {
            route.push("/");
        }, [2000]);
    };

    return (
        <div className="text-center p-2 lg:min-w-96 min-w-72">
            <h1 className="text-3xl font-bold mb-4">Logout</h1>
            <div className="text-5xl notifIcons w-full flex items-center justify-center text-orange-600 py-2">
                <TiWarningOutline />
            </div>

            <p className="mb-8">Apakah anda nyakin ingin logout?</p>

            <div className="w-full flex justify-between ">
                <button
                    className="px-4 py-2 bg-primary-200 text-secondary-200 hover:bg-secondary-200 hover:text-primary-200 rounded-xl font-lg  font-semibold "
                    onClick={handleCloseModal}
                >
                    Tidak
                </button>
                <button
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
