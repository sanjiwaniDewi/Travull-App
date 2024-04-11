import { useState } from "react";

import { useDispatch } from "react-redux";

import Image from "next/image";
import { register } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Link from "next/link";

export default function RegisterForm() {
    const [image, setImage] = useState("/Avatar-Image.png");

    const dispatch = useDispatch();

    const router = useRouter();
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const phoneNumber = formData.get("phoneNumber");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordRepeat = formData.get("passwordRepeat");
        const role = formData.get("role");

        const payload = {
            name,
            email,
            password,
            passwordRepeat,
            profilePictureUrl: image,
            phoneNumber,
            role,
        };
        // console.log(payload);

        try {
            dispatch(register(payload));
            router.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card>
            <h1 className="text-3xl font-bold text-center">Register</h1>

            <form
                onSubmit={handleSubmitForm}
                className="flex flex-col  w-96 gap-y-2 text-black mt-8"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />

                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="phone number"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <input
                    type="password"
                    name="passwordRepeat"
                    placeholder="repeat password"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <select
                    name="role"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                >
                    <option value="admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button
                    type="submit"
                    className="text-slate-50 mt-4  w-96 px-2 py-3 rounded-xl font-bold bg-slate-500"
                >
                    Register
                </button>
            </form>
            <div className="mt-4 flex justify-center gap-3">
                <p>Have an account already?</p>
                <Link href="/login" className="text-blue-700 underline">
                    Login
                </Link>
            </div>
        </Card>
    );
}
