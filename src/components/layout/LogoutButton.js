"use client";
import { logout } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";

export default function LogoutButton({ isDashboard, styleButon, isSideClose }) {
    const dispatch = useDispatch();

    const router = useRouter();
    const handleLogout = () => {
        dispatch(logout());

        if (isDashboard) {
            router.push("/");
        }

        router.push("/");
    };
    return (
        <button className={styleButon} onClick={handleLogout}>
            {isSideClose ? <MdLogout /> : "Logout"}
        </button>
    );
}
