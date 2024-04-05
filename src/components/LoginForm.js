import { login } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <form
            onSubmit={handleSubmit}
            className="container mx-auto flex flex-col gap-3 w-96 mt-10  text-black"
        >
            <input name="email" type="text" placeholder="input your email" />
            <input
                name="password"
                type="password"
                placeholder="input your password"
            />
            <button type="submit" className="text-slate-500">
                Login
            </button>
        </form>
    );
}
