"use client";
import { useEffect } from "react";
import LogoutButton from "../utils/LogoutButton";
import { loginStatus } from "@/redux/features/auth/authSlice";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ChangeRole from "../utils/ChangeRole";
import Link from "next/link";

import { IoHome } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";

export default function Sidebar() {
    const dataUser = useSelector((store) => store.user);
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
        <aside className="self-start sticky top-0 h-screen flex justify-center lg:w-1/6 md:w-1/4  bg-slate-500 text-white">
            <div className="container mx-auto flex flex-col">
                <div className="mt-10">
                    <img
                        src={dataUser.profilePictureUrl}
                        alt="avatar"
                        className="rounded-3xl w-2/3 h-32  object-cover m-auto"
                    />
                    <p className="text-center mt-2">
                        {dataUser.name}{" "}
                        <span className="text-xs">{`(${dataUser.role})`}</span>
                    </p>
                </div>
                <div className="mt-12 mx-8">
                    <ul className="flex flex-col gap-y-6 text-lg font-semibold ">
                        <Link
                            href={"/dashboard"}
                            className="flex gap-2 items-center"
                        >
                            <MdDashboardCustomize />
                            <p className="pt-1">Dashboard</p>
                        </Link>
                        <Link href={"/"} className="flex gap-2 items-center">
                            <IoHome />
                            <p className="pt-1">Beranda</p>
                        </Link>
                        <Link
                            href={"/dashboard/all-user"}
                            className="flex gap-2 items-center"
                        >
                            <FaUser />
                            <p className="pt-1">User</p>
                        </Link>

                        <Link
                            href={"/dashboard/banner"}
                            className="flex gap-2 items-center"
                        >
                            <FaImages />
                            <p className="pt-1">Banner</p>
                        </Link>
                        <Link
                            href={"/dashboard/promo"}
                            className="flex gap-2 items-center"
                        >
                            <RiDiscountPercentFill />
                            <p className="pt-1">Promo</p>
                        </Link>
                        <Link
                            href={"/dashboard/category"}
                            className="flex gap-2 items-center"
                        >
                            <BiSolidCategoryAlt />
                            <p className="pt-1">Destinasi</p>
                        </Link>
                        <Link
                            href={"/dashboard/activity"}
                            className="flex gap-2 items-center"
                        >
                            <TbBeach />
                            <p className="pt-1">Aktivitas</p>
                        </Link>
                    </ul>
                </div>
                <div className="flex my-8 justify-end  grow  place-items-end me-8 ">
                    <LogoutButton
                        isDashboard={true}
                        styleButon="block px-4 py-1 text-sm bg-slate-600 rounded-lg font-medium hover:bg-slate-300 hover:text-slate-800"
                    />
                </div>
            </div>
        </aside>
    );
}
