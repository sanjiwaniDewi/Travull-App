"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function DropdownMenu({ dataUser, handleLogout }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const { role } = useSelector((store) => store.user);

    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="bg-priam">
            <div className="flex gap-x-3 content-center items-center">
                <div>
                    <p className="m-0 p-0 text-sm font-medium">
                        {dataUser.name}
                    </p>
                    {role === "admin" && (
                        <p className="m-0 p-0 text-xs font-normal bg-secondary-300 w-fit px-2 py-1 rounded-xl bg-opacity-50">
                            {dataUser.role}
                        </p>
                    )}
                </div>
                <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    type="button"
                    onClick={toggleDropdown}
                    className=" flex self-center"
                >
                    <img
                        src={dataUser.profilePictureUrl}
                        className="w-10 h-10 rounded-full object-cover"
                        alt="User Avatar"
                    />
                </button>
            </div>

            {showDropdown && (
                <div
                    id="dropdownDots"
                    className={
                        showDropdown
                            ? "absolute mt-1 2xl:right-32 xl:right-4 lg:right:16 md:right-6 right-0 z-10 show bg-primary-100 divide-y divide-gray-100 rounded-lg w-44 shadow-lg "
                            : "hidden"
                    }
                    ref={ref}
                >
                    <ul
                        className=" text-sm text-zinc-900 font-semibold "
                        aria-labelledby="dropdownMenuIconButton"
                    >
                        <li>
                            <Link
                                href="/profile"
                                className="block px-4 py-2 hover:bg-secondary-100 "
                            >
                                Profile
                            </Link>
                        </li>
                        {role === "admin" && (
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="block px-4 py-2 hover:bg-secondary-100  "
                                >
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className=" mb-2">
                        <LogoutButton
                            styleButon={
                                "w-full text-start block px-4 py-2 text-sm  hover:bg-secondary-100 font-semibold "
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
