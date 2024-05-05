"use client";

import { loginStatus } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchUserLogged } from "@/redux/features/user/userSlice";

import Link from "next/link";
import DropdownMenu from "./UserDropdownMenu";

export default function LoginButton() {
    const { isLogin } = useSelector((store) => store.auth);
    const dataUser = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const checkToken = () => {
        const token = localStorage?.getItem("access_token");
        if (token) {
            dispatch(loginStatus(true));
            dispatch(fatchUserLogged());
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
                <Link
                    href="/login"
                    className="font-bold py-2 px-2 w-fit outline outline-2 outline-primary-200 hover:bg-primary-200 hover:text-secondary-100 rounded-2xl"
                >
                    Login
                </Link>
            )}
        </>
    );
}
