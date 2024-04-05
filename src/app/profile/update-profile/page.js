"use client";
import { fatchUserLogged, updateUser } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateProfilePage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { name, email, profilePictureUrl, phoneNumber } = useSelector(
        (store) => store.user
    );

    const handleUserData = () => {
        dispatch(fatchUserLogged());
    };

    useEffect(() => {
        handleUserData();
    }, []);

    const handleUpdateUser = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const phoneNumber = formData.get("phoneNumber");
        const email = formData.get("email");
        const profilePictureUrl = formData.get("profilePictureUrl");
        const user = {
            name,
            email,
            phoneNumber,
            profilePictureUrl,
        };

        console.log(user);

        try {
            dispatch(updateUser(user));
            router.push("/profile");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <p>update Profil</p>
            <form
                onSubmit={handleUpdateUser}
                className="flex flex-col  w-96 gap-y-3"
            >
                <input
                    className="text-black"
                    type="text"
                    defaultValue={name}
                    placeholder="name"
                    name="name"
                />
                <input
                    className="text-black"
                    type="text"
                    defaultValue={email}
                    placeholder="email"
                    name="email"
                />
                <input
                    className="text-black"
                    type="text"
                    defaultValue={profilePictureUrl}
                    placeholder="profile picture url"
                    name="profilePictureUrl"
                />
                <input
                    className="text-black"
                    type="text"
                    defaultValue={phoneNumber}
                    placeholder="phone number"
                    name="phoneNumber"
                />
                <button type="sumbit">submit</button>
            </form>
        </div>
    );
}
