"use client";
import Card from "@/components/Card";
import FormUpdate from "@/components/FormUpdate";
import Layout from "@/components/Layout";
import ProfieImage from "@/components/ProfileImage";
import UploadImage from "@/components/UploadImage";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import { fatchUserLogged, updateUser } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateProfilePage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const dataUser = useSelector((store) => store.user);
    const { imageUrl } = useSelector((store) => store.image);

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

        const user = {
            name,
            email,
            phoneNumber,
            profilePictureUrl: imageUrl,
        };

        console.log(user);

        try {
            dispatch(updateUser(user));

            router.push("/profile");
        } catch (err) {
            console.log(err);
        }
        dispatch(deleteImageUrl());
    };

    return (
        <Layout>
            <div className="flex justify-center items-center mt-20">
                <Card>
                    <div className="flex md:flex-row flex-col md:gap-10 gap:3">
                        <div className="flex flex-col md:w-96 w-full">
                            <ProfieImage image={dataUser.profilePictureUrl} />
                            <div className="flex justify-center">
                                <UploadImage />
                            </div>
                        </div>
                        <FormUpdate
                            handleUpdateUser={handleUpdateUser}
                            dataUser={dataUser}
                        />
                    </div>
                </Card>
            </div>
        </Layout>
    );
}
