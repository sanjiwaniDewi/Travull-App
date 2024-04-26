"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";
import RegisterForm from "@/components/auth/register/RegisterForm";
import Toast from "@/components/utils/Toast";
import Modal from "@/components/utils/Modal";
import { BsPatchCheck } from "react-icons/bs";
import { registerStatus } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const { isRegister } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleIsRegister = () => {
        if (isRegister) {
            setTimeout(() => {
                dispatch(registerStatus(false));
            }, 2000);
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        }
    };

    useEffect(() => {
        handleIsRegister();
    }, [isRegister]);
    return (
        <div className="relative container mx-auto w-full h-screen flex items-center content-center">
            <div className="shadow-xl bg-slate-50 bg-opacity-60 rounded-5 mx-auto">
                <RegisterForm />
            </div>

            {isRegister && (
                <Toast>
                    <div>
                        <p className="text-3xl font-bold mb-4">
                            Sukses Register
                        </p>
                        <div className="text-5xl font-extrabold flex justify-center">
                            <BsPatchCheck />
                        </div>
                    </div>
                </Toast>
            )}
        </div>
    );
}
