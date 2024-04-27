import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import MenuNavDashboard from "./MenuNavDashboard";

export default function NavbarDashboard() {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div>
            <nav className="display-none py-4 bg-opacity-60 bg-primary-200 fixed top-0 z-50 w-full navDashbord">
                <div className="container mx-auto lg:px-1 px-5 flex justify-between">
                    <div className="nav-logo text-slate-900 font-extrabold text-3xl content-center">
                        <Link href={"/"}>Travull</Link>
                    </div>
                    <button
                        onClick={handleShowMenu}
                        className="text-4xl font-bold"
                    >
                        {showMenu ? <GrClose /> : <CgMenuRight />}
                    </button>
                </div>
                <div>{showMenu && <MenuNavDashboard />}</div>
            </nav>
        </div>
    );
}
