"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/features/upload/imageSlice";
import RegisterForm from "@/components/auth/register/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <RegisterForm />
        </div>
    );
}
