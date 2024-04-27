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
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold mb-8">Logout</h1>
            <p className="mb-12">Apakah anda nyakin ingin keluar?</p>

            <div className="w-full flex justify-between ">
                <button
                    className="px-4 py-2 bg-slate-500 hover:bg-slate-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleCloseModal}
                >
                    Tidak
                </button>
                <button
                    className="px-4 py-2 bg-orange-400 hover:bg-orange-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
