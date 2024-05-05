"use client";
import { useEffect } from "react";
import { loginStatus } from "@/redux/features/auth/authSlice";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import LogoutButton from "@/components/layout/LogoutButton";

import { IoHome } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function Sidebar({ handleShowSideBar }) {
    const dispatch = useDispatch();

    const userLogged = () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            dispatch(loginStatus(true));
            dispatch(fatchUserLogged());
        }
    };

    useEffect(() => {
        userLogged();
    }, []);

    return (
        <aside className="self-start sticky top-0 h-screen lg:flex hidden justify-center lg:w-1/6 md:w-1/4  bg-primary-200 text-secondary-200 sidebarShow">
            <div className="container mx-auto flex flex-col">
                <div className="flex justify-end me-8 mt-4 text-4xl ">
                    <button onClick={handleShowSideBar}>
                        <IoCloseSharp />
                    </button>
                </div>

                <div className="mt-12 px-8  ">
                    <ul className="flex flex-col gap-y-4 text-xl font-semibold divide-y divide-secondary-100 ">
                        <div></div>
                        <Link
                            href={"/dashboard"}
                            className="flex gap-2 items-center py-2 px-2 rounded-lg  hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <MdDashboardCustomize />
                            <p className="pt-1">Dashboard</p>
                        </Link>
                        <Link
                            href={"/"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <IoHome />
                            <p className="pt-1">Beranda</p>
                        </Link>
                        <Link
                            href={"/dashboard/all-user"}
                            className="flex gap-2 items-center py-3 px-2  rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <FaUser />
                            <p className="pt-1">User</p>
                        </Link>

                        <Link
                            href={"/dashboard/banner"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <FaImages />
                            <p className="pt-1">Banner</p>
                        </Link>
                        <Link
                            href={"/dashboard/promo"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <RiDiscountPercentFill />
                            <p className="pt-1">Promo</p>
                        </Link>
                        <Link
                            href={"/dashboard/category"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <BiSolidCategoryAlt />
                            <p className="pt-1">Destinasi</p>
                        </Link>
                        <Link
                            href={"/dashboard/activity"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <TbBeach />
                            <p className="pt-1">Aktivitas</p>
                        </Link>
                    </ul>
                </div>
                <div className="flex my-8 justify-end  grow  place-items-end me-8 ">
                    <LogoutButton
                        isDashboard={true}
                        styleButon="block px-4 py-1 text-xl outline outline-1 rounded-lg font-semibold font-medium hover:bg-slate-300 hover:text-slate-800"
                    />
                </div>
            </div>
        </aside>
    );
}
