"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";
import RegisterForm from "@/components/auth/register/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="container mx-auto w-full h-screen flex items-center content-center">
            <div className="shadow-xl bg-slate-50 bg-opacity-60 rounded-5 mx-auto">
                <RegisterForm />
            </div>
        </div>
    );
}
