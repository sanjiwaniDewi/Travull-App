"use client";
import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function MenuNav() {
    const { isLogin } = useSelector((store) => store.auth);
    const role = localStorage.getItem("role");

    return (
        <div className="w-full mt-6 pb-4 ">
            <ul className="flex flex-col gap-y-4">
                {role === "admin" && (
                    <div>
                        <li className="mb-4">
                            <Link href={"/Profile"}>Profil</Link>
                        </li>
                        <li className="">
                            <Link href={"/Dashboard"}>Dashboard</Link>
                        </li>
                    </div>
                )}
                <li className="">
                    <Link href={"/promo"}>Promo</Link>
                </li>
                <li>
                    <Link href={"/category"}>Destinasi</Link>
                </li>
                <li>
                    <Link href={"/activity"}>Aktivitas</Link>
                </li>
                <li className="">
                    {isLogin ? (
                        <div>
                            <LogoutButton />
                        </div>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </li>
            </ul>
        </div>
    );
}
