"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import Toast from "@/components/utils/Toast";
import { loginStatus } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPatchCheck } from "react-icons/bs";
import Modal from "@/components/utils/Modal";

export default function LoginPage() {
    const { isLogin } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleIsRegister = () => {
        if (isLogin) {
            setTimeout(() => {
                dispatch(loginStatus(false));
            }, 2000);
            setTimeout(() => {
                router.push("/");
            }, 3000);
        }
    };
    useEffect(() => {
        handleIsRegister();
    }, [isLogin]);

    return (
        <div className="relative container mx-auto w-full h-screen flex flex-col justify-center items-center content-center ">
            <div className="bg-slate-50 bg-opacity-60 rounded-3xl outline outline-1 outline-zinc-300 mx-auto shadow-xl">
                <LoginForm />
            </div>

            {isLogin && (
                <Modal>
                    <div className="w-96 h-40 rounded-3xl flex flex-col justify-center items-center text-center">
                        <p className="text-3xl font-bold mb-4">Login Sukses</p>
                        <div className="text-5xl font-extrabold flex justify-center">
                            <BsPatchCheck />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
