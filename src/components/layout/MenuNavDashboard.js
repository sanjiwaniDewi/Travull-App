import Link from "next/link";

import { IoHome } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import LogoutButton from "./LogoutButton";
import { MdLogout } from "react-icons/md";

export default function MenuNavDashboard() {
    return (
        <div className="lg:hidden container mx-auto px-5  mt-2 w-full pb-12">
            <ul className="flex flex-col gap-y-1 text-xl font-semibold  ">
                <div></div>
                <Link
                    href={"/dashboard"}
                    className="flex gap-2 items-center py-2 px-2 rounded-lg  hover:bg-primary-200 hover:text-secondary-200"
                >
                    <MdDashboardCustomize />
                    <p className="pt-1">Dashboard</p>
                </Link>
                <Link
                    href={"/"}
                    className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <IoHome />
                    <p className="pt-1">Beranda</p>
                </Link>
                <Link
                    href={"/dashboard/all-user"}
                    className="flex gap-2 items-center py-3 px-2  rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <FaUser />
                    <p className="pt-1">User</p>
                </Link>

                <Link
                    href={"/dashboard/banner"}
                    className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <FaImages />
                    <p className="pt-1">Banner</p>
                </Link>
                <Link
                    href={"/dashboard/promo"}
                    className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <RiDiscountPercentFill />
                    <p className="pt-1">Promo</p>
                </Link>
                <Link
                    href={"/dashboard/category"}
                    className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <BiSolidCategoryAlt />
                    <p className="pt-1">Destinasi</p>
                </Link>
                <Link
                    href={"/dashboard/activity"}
                    className="flex gap-2 items-center py-3 px-2 rounded-lg hover:bg-primary-200 hover:text-secondary-200"
                >
                    <TbBeach />
                    <p className="pt-1">Aktivitas</p>
                </Link>
                <div className="flex gap-2 items-center py-3 px-2  rounded-lg hover:bg-primary-200 hover:text-secondary-200">
                    <MdLogout />
                    <LogoutButton
                        isDashboard={true}
                        styleButon={" text-start "}
                    />
                </div>
            </ul>
        </div>
    );
}
