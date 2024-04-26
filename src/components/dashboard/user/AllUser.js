"use client";

import { BASE_API, API_KEY } from "@/API/api";
import axios from "axios";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllUser,
    setCurrenPageDataUser,
} from "@/redux/features/user/userSlice";
import Pagination from "@/components/utils/Pagination";
import { setShowUsers } from "@/redux/features/role/roleSlice";

export default function AllUser() {
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);

    const getAllDataUsers = () => {
        dispatch(getAllUser());
    };
    useEffect(() => {
        getAllDataUsers();
    }, []);

    const updateShowUserInRole = () => {
        if (userData) dispatch(setShowUsers(userData.users.dataShow));
    };

    useEffect(() => {
        updateShowUserInRole();
    }, [userData.users.dataShow]);

    const handleCurrentPage = (currentPage) => {
        dispatch(setCurrenPageDataUser(currentPage));
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-full px-12 py-8 container bg-white border shadow-md border-gray-200 rounded-lg">
                <div className="text-2xl font-bold mb-3">Tabel User</div>

                <TableUser
                    data={userData.users.dataShow}
                    currentPage={userData.users.currentPage}
                />

                <Pagination
                    totalPages={userData.users.totalPages}
                    handleCurrentPage={handleCurrentPage}
                />
            </div>
        </div>
    );
}
