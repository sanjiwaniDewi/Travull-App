"use client";
import Card from "@/components/layout/Card";
import FormUpdate from "@/components/profile/FormUpdate";
import Layout from "@/components/layout/Layout";
import ProfieImage from "@/components/profile/ProfileImage";
import UploadImage from "@/components/utils/UploadImage";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import { fatchUserLogged, updateUser } from "@/redux/features/user/userSlice";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEditStatus } from "@/redux/features/status/statusSilce";

export default function UpdateProfilePage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const dataUser = useSelector((store) => store.user);
    const { imageUrl } = useSelector((store) => store.image);
    const { isUpdate } = useSelector((store) => store.status);

    // const handleUserData = () => {
    //     dispatch(fatchUserLogged());
    // };

    // useEffect(() => {
    //     handleUserData();
    // }, []);

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
            profilePictureUrl:
                imageUrl !== "" ? imageUrl : dataUser.profilePictureUrl,
        };

        try {
            dispatch(updateUser(user));
            dispatch(changeEditStatus());
            // redirect("/profile");
        } catch (err) {
            // console.log(err);
        }
        dispatch(deleteImageUrl());
    };
    const handleRedirect = () => {
        if (isUpdate) {
            dispatch(changeEditStatus());
            router.push("/profile");
        }
    };
    useEffect(() => {
        handleRedirect();
    }, [isUpdate]);

    return (
        <Layout>
            <div className="container mx-auto w-full h-full py-52">
                <div className="flex justify-center items-center w-full ">
                    <Card>
                        <div className="flex md:flex-row flex-col md:gap-10 gap:3 p-4">
                            <div className="flex flex-col w-full">
                                <ProfieImage
                                    image={dataUser.profilePictureUrl}
                                />
                                <div className="flex justify-center text-sm">
                                    <UploadImage
                                        customStyleBtn={
                                            "  w-full px-2 py-3 rounded-xl font-semibold text-sm  bg-secondary-100 text-primary-200"
                                        }
                                        customStyleInput={
                                            "bg-primary-100  px-2 py-4 rounded-xl focus:outline-secondary-100"
                                        }
                                    />
                                </div>
                            </div>
                            <FormUpdate
                                handleUpdateUser={handleUpdateUser}
                                dataUser={dataUser}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
