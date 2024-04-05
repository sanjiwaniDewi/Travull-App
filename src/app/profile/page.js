"use client";
import Profile from "@/components/Profile";
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
    const { name, email, role, profilePictureUrl, phoneNumber } = useSelector(
        (store) => store.user
    );

    const handleUserData = () => {
        dispatch(fatchUserLogged());
    };

    useEffect(() => {
        handleUserData();
    }, []);

    const userData = { name, email, role, profilePictureUrl, phoneNumber };

    return (
        <>
            <Link href="/profile/update-profile">Edit Profil</Link>
            <Profile userData={userData} />
        </>
    );
}
