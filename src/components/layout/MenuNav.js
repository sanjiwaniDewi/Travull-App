"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function MenuNav() {
    const { isLogin } = useSelector((store) => store.auth);

    const role = localStorage.getItem("role");

    return (
        <div className="lg:hidden block w-full mt-6 pb-4  font-semibold ">
            <ul className="flex flex-col gap-y-5">
                {role === "admin" && (
                    <div>
                        <li className="mb-4 hover:text-secondary-100 hover:text-lg">
                            <Link href={"/profile"}>Profil</Link>
                        </li>
                        <li className="hover:text-secondary-100 hover:text-lg">
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                    </div>
                )}
                <li className="hover:text-secondary-100 hover:text-lg">
                    <Link href={"/promo"}>Promo</Link>
                </li>
                <li className="hover:text-secondary-100 hover:text-lg">
                    <Link href={"/category"}>Destinasi</Link>
                </li>
                <li className="hover:text-secondary-100 hover:text-lg">
                    <Link href={"/activity"}>Aktivitas</Link>
                </li>
                <li className="hover:text-secondary-100 hover:text-lg">
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
