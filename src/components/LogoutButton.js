"use client";
import { logout } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
export default function LogoutButton() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <button
            className="block px-4 py-1 text-sm text-gray-700
                    hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
                    dark:hover:text-white"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}
