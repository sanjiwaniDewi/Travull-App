"use client";
import { useEffect } from "react";
import LogoutButton from "@/components/layout/LogoutButton";
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
import { TiThMenu } from "react-icons/ti";

export default function SidebarClose({ handleShowSideBar }) {
    return (
        <aside className="self-start sticky top-0 h-screen lg:flex hidden justify-center w-fit  bg-primary-200 text-secondary-200 sidebarShow">
            <div className="container mx-auto flex flex-col">
                <div className="pt-6 px-8">
                    <div className="flex justify-center gap-2 text-2xl font-semibold items-center py-2 px-2 rounded-lg  hover:bg-primary-200 hover:text-secondary-200">
                        <button onClick={handleShowSideBar}>
                            <TiThMenu />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-y-4 mt-16 text-2xl font-semibold  divide-slate-300 ">
                        <Link
                            href={"/dashboard"}
                            className="flex gap-2 items-center py-2 px-2 rounded-lg  hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <MdDashboardCustomize />
                        </Link>
                        <Link
                            href={"/"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <IoHome />
                        </Link>
                        <Link
                            href={"/dashboard/all-user"}
                            className="flex gap-2 items-center py-3 px-2  rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <FaUser />
                        </Link>

                        <Link
                            href={"/dashboard/banner"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <FaImages />
                        </Link>
                        <Link
                            href={"/dashboard/promo"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <RiDiscountPercentFill />
                        </Link>
                        <Link
                            href={"/dashboard/category"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <BiSolidCategoryAlt />
                        </Link>
                        <Link
                            href={"/dashboard/activity"}
                            className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        >
                            <TbBeach />
                        </Link>
                    </ul>
                </div>
                <div className="flex my-8 justify-center  grow  place-items-end">
                    <LogoutButton
                        isDashboard={true}
                        styleButon="text-3xl font-bold p-2 rounded-lg hover:bg-secondary-200 hover:text-primary-200"
                        isSideClose={true}
                    />
                </div>
            </div>
        </aside>
    );
}
