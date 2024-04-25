import { getAllUser, updateRoleUser } from "@/redux/features/user/userSlice";
import Card from "../../layout/Card";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleModal({ showModal, handleShowModal, userData }) {
    const dataUser = useSelector((store) => store.user);
    console.log(dataUser);
    const dispatch = useDispatch();
    const router = useRouter(); // use useRouter
    const changeRole = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const role = formData.get("role");
        try {
            if (userData) {
                dispatch(updateRoleUser({ id: userData.id, role }));
            } else {
                dispatch(updateRoleUser({ id: dataUser.id, role }));
            }
            dispatch(getAllUser());
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Card>
                        <div className="flex justify-end">
                            <button
                                onClick={handleShowModal}
                                className="text-black"
                            >
                                close
                            </button>
                        </div>

                        <div className="flex gap-8 mt-5">
                            <div className="w-52 text-black">
                                <img
                                    src={
                                        userData
                                            ? userData.profilePictureUrl
                                            : dataUser.profilePictureUrl
                                    }
                                    className="rounded-3xl w-20 h-20 mb-3 object-cover  m-auto"
                                />
                                <p className="text-center text-2xl font-bold">
                                    {userData ? userData.name : dataUser.name}{" "}
                                    <span className="text-sm font-medium">
                                        (
                                        {userData
                                            ? userData.role
                                            : dataUser.role}
                                        )
                                    </span>
                                </p>
                            </div>
                            <div className="text-black w-52 self-center">
                                <form
                                    onSubmit={changeRole}
                                    className="flex flex-col"
                                >
                                    <select
                                        name="role"
                                        className="text-black bg-slate-100 mt-1 px-2
                                    py-4 rounded-xl focus:outline-none"
                                        defaultValue={
                                            userData
                                                ? userData.role
                                                : dataUser.role
                                        }
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <button
                                        type="submit"
                                        className="mt-5 block px-4 py-3 text-sm text-white bg-slate-600 rounded-lg font-medium hover:bg-slate-300 hover:text-slate-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
}