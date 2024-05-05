"use client";

import FormUpdate from "@/components/profile/FormUpdate";
import ProfieImage from "@/components/profile/ProfileImage";
import UploadImage from "@/components/utils/UploadImage";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import { setSuccessUpdate, updateUser } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIsEmptyInput } from "@/utils/handleFormatData";

export default function UpdateProfilePage() {
    const { imageUrl } = useSelector((store) => store.image);
    const dataUser = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const router = useRouter();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = checkIsEmptyInput(formData.get("name"));
        const phoneNumber = checkIsEmptyInput(formData.get("phoneNumber"));
        const email = checkIsEmptyInput(formData.get("email"));

        const user = {
            name,
            email,
            phoneNumber,
            profilePictureUrl:
                imageUrl !== "" && imageUrl !== null
                    ? imageUrl
                    : dataUser.profilePictureUrl,
        };

        try {
            dispatch(updateUser(user));
        } catch (err) {}
        dispatch(deleteImageUrl());
    };

    const redirectOnSuccessSubmit = () => {
        dispatch(setSuccessUpdate(false));
        if (dataUser.successUpdate) router.push("/profile");
    };

    useEffect(() => {
        redirectOnSuccessSubmit();
    }, [dataUser.successUpdate]);

    return (
        <div className="container mx-auto w-full h-full py-52">
            <div className="flex justify-center items-center w-full ">
                <div className="block p-4 bg-white border border-gray-200 rounded-lg lg:mx-auto mx-5 lg:w-2/3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 p-4">
                        <div className="flex flex-col w-full">
                            <ProfieImage image={dataUser.profilePictureUrl} />
                            <div className="flex justify-center text-sm">
                                <UploadImage
                                    customStyleBtn={
                                        "  w-full px-2 py-3 rounded-xl font-semibold text-sm hover:bg-secondary-100 hover:text-primary-200 bg-primary-200 text-slate-200"
                                    }
                                    customStyleInput={
                                        "bg-primary-100  px-2 py-4 rounded-xl focus:outline-secondary-100"
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <FormUpdate
                                handleUpdateUser={handleUpdateUser}
                                dataUser={dataUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
