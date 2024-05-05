import { setUpdatedUserShow } from "@/redux/features/user/userSlice";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
    clearRoleUserData,
    updateRoleUser,
} from "@/redux/features/role/roleSlice";
import {
    changeModalStatus,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import Card from "../../layout/Card";

export default function RoleModal() {
    const dispatch = useDispatch();
    const router = useRouter(); // use useRouter
    const { showModal } = useSelector((state) => state.modal);
    const userData = useSelector((state) => state.role);

    const changeRole = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const role = formData.get("role");
        try {
            dispatch(updateRoleUser({ id: userData.id, role }));
        } catch (err) {}
    };

    const handlingUpdatedUserShow = () => {
        dispatch(setUpdatedUserShow(userData.showUsers));
    };

    useEffect(() => {
        handlingUpdatedUserShow();
    }, [userData.role]);

    const handleShowModal = () => {
        dispatch(changeModalStatus());
        dispatch(clearRoleUserData());
        dispatch(setModalType(""));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Card>
                <div className="flex justify-end">
                    <button onClick={handleShowModal} className="text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex gap-8 mt-5">
                    <div className="w-52 text-black">
                        <img
                            src={userData.profilePictureUrl}
                            className="rounded-3xl w-full h-40 mb-3 object-cover  m-auto"
                        />
                        <p className="text-center text-2xl font-bold">
                            {userData.name}{" "}
                            <span className="text-sm font-medium">
                                ({userData.role})
                            </span>
                        </p>
                    </div>
                    <div className="text-black w-52 self-center">
                        <form onSubmit={changeRole} className="flex flex-col">
                            <select
                                name="role"
                                className="w-full  focus:outline-primary-200 py-3 mb-2 bg-secondary-200 bg-opacity-30 px-3 rounded-xl outline outline-1 outline-slate-300 "
                                defaultValue={userData.role}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-primary-200 w-full mt-4  text-sm font-semibold  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 px-4 py-3 rounded-2xl"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    );
}
