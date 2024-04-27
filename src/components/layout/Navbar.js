"use client";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import MenuNav from "./MenuNav";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav
            className={` py-3  bg-primary-100 fixed top-0 z-50 w-full ${
                showMenu ? "bg-opacity-70" : "bg-opacity-60"
            } `}
        >
            <div className="container mx-auto lg:px-1 px-5 grid lg:grid-cols-5 grid-cols-3">
                <div className="nav-logo text-Zinc-900 font-extrabold text-3xl content-center">
                    <Link href={"/"}>Travull</Link>
                </div>
                <div className="lg:col-span-4 col-span-2 flex justify-between expanNav">
                    <div className="nav-menu flex justify-start self-center  font-semibold  ">
                        <ul className="flex gap-x-10">
                            <li className="">
                                <Link href={"/promo"}>Promo</Link>
                            </li>
                            <li>
                                <Link href={"/category"}>Destinasi</Link>
                            </li>
                            <li>
                                <Link href={"/activity"}>Aktivitas</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-button flex justify-end self-center">
                        <LoginButton />
                    </div>
                </div>
                <div className="lg:dispay-none display-block smallSizeNavbar col-span-2 ">
                    <div className="flex justify-end  align-items-end">
                        <button
                            onClick={handleShowMenu}
                            className="text-4xl font-bold"
                        >
                            {showMenu ? <GrClose /> : <CgMenuRight />}
                        </button>
                    </div>
                </div>
                <div className="lg:dispay-none display-block col-span-2 smallSizeNavbar ">
                    <div>{showMenu && <MenuNav />}</div>
                </div>
            </div>
        </nav>
    );
}
