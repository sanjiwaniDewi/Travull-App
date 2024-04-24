"use client";
import Card from "@/components/layout/Card";
import Layout from "@/components/layout/Layout";
import Profile from "@/components/profile/Profile";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// async function getUserLogged() {
//     if (typeof window !== "undefined") {
//         const token = localStorage.getItem("access_token");
//         if (token) {
//             const res = await axios.get(`${BASE_API}/user`, {
//                 headers: {
//                     apiKey: API_KEY,
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             console.log("haloo");

//             return res.data.data;
//         }
//     }
// }

export default function ProfilePage() {
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);

    const handleUserData = () => {
        dispatch(fatchUserLogged());
    };

    useEffect(() => {
        handleUserData();
    }, []);

    return (
        <Layout>
            <div className="flex justify-center items-center mt-20">
                <Card>
                    <Profile userData={userData} />
                    <Link href="/profile/update-profile">
                        <button className="mt-4 py-3 bg-slate-500 text-white px-4 font-semibold text-sm rounded-xl w-full">
                            Edit Profile
                        </button>
                    </Link>
                </Card>
            </div>
        </Layout>
    );
}
