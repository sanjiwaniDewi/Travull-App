"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import Toast from "@/components/utils/Toast";
import {
    loginStatus,
    successLoginStatus,
} from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPatchCheck } from "react-icons/bs";
import Modal from "@/components/utils/Modal";

export default function LoginPage() {
    const { isSuccessLogin } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleIsLogin = () => {
        if (isSuccessLogin) {
            setTimeout(() => {
                dispatch(successLoginStatus(false));
            }, 2000);
            setTimeout(() => {
                router.push("/");
            }, 3000);
        }
    };
    useEffect(() => {
        handleIsLogin();
    }, [isSuccessLogin]);

    return (
        <div className="relative container mx-auto w-full h-screen flex flex-col justify-center items-center content-center ">
            <div className="bg-slate-50 bg-opacity-90 rounded-3xl outline outline-1 outline-zinc-300 mx-auto shadow-xl">
                <LoginForm />
            </div>

            {isSuccessLogin && (
                <Modal>
                    <div className="w-96 h-40 rounded-3xl flex flex-col justify-center items-center text-center">
                        <p className="text-3xl font-bold mb-8">Login Sukses</p>
                        <div className=" notifIcons font-extrabold flex justify-center text-secondary-200">
                            <BsPatchCheck />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
