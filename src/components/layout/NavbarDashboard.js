import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import MenuNavDashboard from "./MenuNavDashboard";

export default function NavbarDashboard() {
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
        <div>
            <nav className="lg:hidden py-4 bg-opacity-60 bg-secondary-200 fixed top-0 z-50 w-full">
                <div className="container mx-auto lg:px-1 px-5 flex justify-between ">
                    <div className="nav-logo text-primary-200 font-extrabold text-3xl content-center">
                        <Link href={"/"}>Travull</Link>
                    </div>
                    <button
                        onClick={handleShowMenu}
                        className="text-4xl font-bold"
                    >
                        {showMenu ? <GrClose /> : <CgMenuRight />}
                    </button>
                </div>
                {showMenu && (
                    <div className="container mx-auto " ref={ref}>
                        <MenuNavDashboard />
                    </div>
                )}
            </nav>
        </div>
    );
}
