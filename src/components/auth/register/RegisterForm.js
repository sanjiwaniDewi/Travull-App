"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, setErrMessage } from "@/redux/features/auth/authSlice";
import { handleRegistationForm } from "@/utils/handleInputForm";
import Link from "next/link";
import Image from "next/image";

export default function RegisterForm() {
    const [image, setImage] = useState("/Avatar-Image.png");
    const { errMessage, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const { customError, payload } = handleRegistationForm(
                formData,
                image
            );

            if (customError) {
                dispatch(setErrMessage(customError));
            }

            if (errMessage.length === 0 && !customError && payload) {
                dispatch(register(payload));
            }
        } catch (err) {}
    };

    const handleChange = () => {
        if (errMessage.length > 0) {
            dispatch(setErrMessage([]));
        }
    };

    return (
        <div className="card mx-auto my-auto rounded-5 bg-opacity-30">
            <div className="px-4 pt-10 pb-6 rounded-5  bg-primary-100 bg-opacity-30">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
                </h1>
                <div className="flex justify-center">
                    <p className="text-sm w-96 text-center text-red-600  ">
                        {Array.isArray(errMessage)
                            ? errMessage.join(" ")
                            : errMessage}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmitForm}
                    className="flex flex-col  gap-y-1 text-black  font-semibold"
                    onChange={handleChange}
                >
                    <label className="text-sm">Nama</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama"
                        className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                    />
                    <label className="text-sm ">Nomor Handphone</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                    />

                    <label className="text-sm">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-y-1">
                            <label className="text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label className="text-sm">Repeat Password</label>
                            <input
                                type="password"
                                name="passwordRepeat"
                                placeholder="Repeat password"
                                className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                            />
                        </div>
                    </div>

                    <label className="text-sm">Role</label>
                    <select
                        name="role"
                        className="bg-secondary-100 bg-opacity-30 hover:bg-secondary-100 px-3 py-3 rounded-xl focus:outline-none"
                    >
                        <option value="admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                    <button
                        type="submit"
                        className="text-slate-50 mt-4 px-2 py-3 border-2  rounded-xl font-bold bg-primary-200 hover:text-primary-200 hover:bg-secondary-200 disabled:bg-slate-200 disabled:text-slate-400"
                        disabled={errMessage.length || isLoading}
                    >
                        {isLoading ? (
                            <div
                                className="spinner-border text-secondary"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>
                <div className="mt-4 flex justify-center gap-3">
                    <p>Sudah punya akun?</p>
                    <Link
                        href="/login"
                        className="hover:text-blue-700 underline text-primary-200"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
