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
        <div className="lg:hidden block w-full mt-6 pb-4  font-semibold ">
            <ul className="flex flex-col gap-y-5">
                {role === "admin" && (
                    <div>
                        <li className="mb-4 hover:text-primary-100 hover:scale-105">
                            <Link href={"/profile"}>Profil</Link>
                        </li>
                        <li className="hover:text-primary-100 hover:scale-105">
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                    </div>
                )}
                <li className="hover:text-primary-100 hover:scale-105">
                    <Link href={"/promo"}>Promo</Link>
                </li>
                <li className="hover:text-primary-100 hover:scale-105">
                    <Link href={"/category"}>Destinasi</Link>
                </li>
                <li className="hover:text-primary-100 hover:scale-105">
                    <Link href={"/activity"}>Aktivitas</Link>
                </li>
                <li className="hover:text-primary-100 hover:scale-105">
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
