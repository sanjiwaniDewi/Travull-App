"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";
import MenuNav from "./MenuNav";
import { useState, useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav
            className={` py-3  bg-primary-100 fixed top-0 z-50 w-full ${
                showMenu ? "bg-opacity-80" : "bg-opacity-70 shadow-lg"
            } `}
        >
            <div className="container mx-auto lg:px-1 px-5 grid lg:grid-cols-5 grid-cols-3">
                <div className="nav-logo text-Zinc-900 font-extrabold text-3xl content-center">
                    <Link href={"/"}>TravulL</Link>
                </div>
                <div className="hidden lg:col-span-4 col-span-2 lg:flex justify-between">
                    <div className="hidden nav-menu lg:flex justify-start self-center  font-semibold  ">
                        <ul className="flex gap-x-10">
                            <li className="hover:text-secondary-100 hover:scale-105">
                                <Link href={"/promo"}>Promo</Link>
                            </li>
                            <li className="hover:text-secondary-100 hover:scale-105">
                                <Link href={"/category"}>Destinasi</Link>
                            </li>
                            <li className="hover:text-secondary-100 hover:scale-105">
                                <Link href={"/activity"}>Aktivitas</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-button flex justify-end self-center">
                        <LoginButton />
                    </div>
                </div>
                <div className="lg:hidden block smallSizeNavbar col-span-2 ">
                    <div className="flex justify-end  align-items-end">
                        <button
                            onClick={handleShowMenu}
                            className="text-4xl font-bold"
                        >
                            {showMenu ? <GrClose /> : <CgMenuRight />}
                        </button>
                    </div>
                </div>
                <div className="lg:dispay-none block col-span-2 smallSizeNavbar ">
                    {showMenu && (
                        <div ref={ref}>
                            <MenuNav />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
