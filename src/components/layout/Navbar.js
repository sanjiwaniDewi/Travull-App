import Link from "next/link";
import LoginButton from "../utils/LoginButton";

export default function Navbar() {
    return (
        <nav className=" py-3 bg-opacity-60 bg-slate-300 fixed top-0 z-50 w-full">
            <div className="container mx-auto lg:px-1 px-5 grid lg:grid-cols-5 grid-cols-3">
                <div className="nav-logo text-slate-900 font-extrabold text-3xl content-center">
                    <Link href={"/"}>Travull</Link>
                </div>
                <div className="nav-menu flex justify-start self-center  lg:col-span-3 ">
                    <ul className="flex gap-x-10">
                        <li>
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
        </nav>
    );
}
