"use client";

import { BASE_API, API_KEY } from "@/API/api";
import axios from "axios";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "@/redux/features/user/userSlice";

export default function AllUser() {
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);

    const getAllDataUsers = () => {
        dispatch(getAllUser());
    };
    useEffect(() => {
        getAllDataUsers();
    }, []);

    return (
        <div>
            <TableUser data={userData.users.data} />
        </div>
    );
}
