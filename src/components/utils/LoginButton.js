"use client";

import { loginStatus, logout } from "@/redux/features/auth/authSlice";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "./UserDropdownMenu";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
export default function LoginButton() {
    const dispatch = useDispatch();
    const { isLogin } = useSelector((store) => store.auth);
    const dataUser = useSelector((store) => store.user);

    const checkToken = () => {
        const token = localStorage?.getItem("access_token");
        if (token) {
            dispatch(loginStatus(true));
            dispatch(fatchUserLogged());
            // localStorage.setItem("role", dataUser?.role);
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <>
            {isLogin ? (
                <div className=" flex flex-row gap-x-5">
                    <div>
                        <DropdownMenu dataUser={dataUser} />
                    </div>
                </div>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </>
    );
}
