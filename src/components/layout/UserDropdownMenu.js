"use client";
import { useState } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";

export default function DropdownMenu({ dataUser, handleLogout }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const { role } = useSelector((store) => store.user);

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

            <div
                id="dropdownDots"
                className={
                    showDropdown
                        ? "absolute mt-1 2xl:right-32 xl:right-4 lg:right:16 md:right-6 right-0 z-10 show bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        : "hidden"
                }
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li>
                        <Link
                            href="/profile"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </Link>
                    </li>
                    {role === "admin" && (
                        <li>
                            <Link
                                href="/dashboard"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="py-2">
                    <LogoutButton
                        styleButon={
                            "w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        }
                    />
                </div>
            </div>
        </div>
    );
}
