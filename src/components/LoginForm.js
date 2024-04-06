import { login } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Link from "next/link";
export default function LoginForm() {
    const dispatch = useDispatch();

    const { isLogin } = useSelector((store) => store.auth);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            dispatch(login({ email, password }));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (isLogin) {
            router.push("/");
        }
    }, [isLogin]);

    return (
        <Card>
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="container mx-auto flex flex-col gap-3 w-96 mt-8  text-black"
            >
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-slate-100 px-2 py-4 rounded-xl focus:outline-none"
                />
                <button
                    type="submit"
                    className="text-slate-50 mt-4  w-96 px-2 py-3 rounded-xl font-bold bg-slate-500"
                >
                    Login
                </button>
            </form>
            <div className="mt-4 flex justify-center gap-3">
                <p>New in Travull?</p>
                <Link href="/register" className="text-blue-700 underline">
                    Register Now
                </Link>
            </div>
        </Card>
    );
}
