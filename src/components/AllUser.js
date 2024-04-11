"use client";

import { BASE_API, API_KEY } from "@/API/api";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";
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
            <Table data={userData.users.data} />
        </div>
    );
}
