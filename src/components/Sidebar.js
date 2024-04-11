"use client";
import { useEffect } from "react";
import LogoutButton from "./LogoutButton";
import { loginStatus } from "@/redux/features/auth/authSlice";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ChangeRole from "./ChangeRole";
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
        <aside className="self-start  sticky top-0 h-screen flex justify-center w-1/6 bg-slate-500 text-white">
            <div className="container mx-auto max-w-56 flex flex-col">
                <div className="mt-10">
                    <img
                        src={dataUser.profilePictureUrl}
                        alt="avatar"
                        className="rounded-3xl w-2/3 h-32  object-cover m-auto"
                    />
                    <p className="text-center mt-2">{dataUser.role}</p>
                    <div className="flex justify-center mt-2">
                        <ChangeRole />
                    </div>
                </div>
                <div className="mt-5 ms-3">
                    <ul className="flex flex-col gap-y-3">
                        <li>User</li>
                        <li>Banner</li>
                        <li>Promotion</li>
                        <li>Category</li>
                        <li>Activity</li>
                    </ul>
                </div>
                <div className="flex my-8 justify-end  grow  place-items-end me-5 ">
                    <LogoutButton
                        isDashboard={true}
                        styleButon="block px-4 py-1 text-sm bg-slate-600 rounded-lg font-medium hover:bg-slate-300 hover:text-slate-800"
                    />
                </div>
            </div>
        </aside>
    );
}
