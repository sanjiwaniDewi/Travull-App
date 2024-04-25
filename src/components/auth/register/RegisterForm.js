"use client";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { register, setErrMessage } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Card from "../../layout/Card";
import Link from "next/link";
import { handleRegistationForm } from "@/utils/handleInputForm";

export default function RegisterForm() {
    const [image, setImage] = useState("/Avatar-Image.png");
    const { errMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const router = useRouter();
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const payload = handleRegistationForm(formData, image);

            if (errMessage.length === 0 || payload) {
                dispatch(register(payload));
            }

            // router.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = () => {
        if (errMessage.length > 0) {
            dispatch(setErrMessage([]));
        }
    };

    return (
        <div className="card mx-auto my-auto px-4 pt-10 pb-6 rounded-5">
            <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
            <div className="flex justify-center">
                <p className="text-sm w-96 text-center text-red-600  ">
                    {" "}
                    {Array.isArray(errMessage)
                        ? errMessage.join(" ")
                        : errMessage}
                </p>
            </div>

            <form
                onSubmit={handleSubmitForm}
                className="flex flex-col  gap-y-1 text-black "
                onChange={handleChange}
            >
                <label className="text-sm">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                />
                <label className="text-sm ">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                />

                <label className="text-sm">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-y-1">
                        <label className="text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-sm">Repeat Password</label>
                        <input
                            type="password"
                            name="passwordRepeat"
                            placeholder="Repeat password"
                            className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                        />
                    </div>
                </div>

                <label className="text-sm">Role</label>
                <select
                    name="role"
                    className="bg-slate-100 px-3 py-3 rounded-xl focus:outline-none"
                >
                    <option value="admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button
                    type="submit"
                    className="text-slate-50 mt-4 px-2 py-3 rounded-xl font-bold bg-slate-500"
                >
                    Register
                </button>
            </form>
            <div className="mt-4 flex justify-center gap-3">
                <p>Sudah punya akun?</p>
                <Link href="/login" className="text-blue-700 underline">
                    Login
                </Link>
            </div>
        </div>
    );
}
