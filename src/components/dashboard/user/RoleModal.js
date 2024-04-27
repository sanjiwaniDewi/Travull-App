import {
    getAllUser,
    setUpdatedUserShow,
} from "@/redux/features/user/userSlice";
import Card from "../../layout/Card";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
    clearRoleUserData,
    setCangeRoleDataUser,
    updateRoleUser,
} from "@/redux/features/role/roleSlice";
import {
    changeModalStatus,
    clearModalData,
    setModalType,
} from "@/redux/features/modal/modalSlice";

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
                        close
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
                                className="text-black bg-slate-100 mt-1 px-2
                                    py-4 rounded-xl focus:outline-none"
                                defaultValue={userData.role}
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
    );
}
