"use client";

import { BASE_API, API_KEY } from "@/API/api";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

export default function AllUser() {
    const [userData, setUserData] = useState();
    const getUsersData = async () => {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`${BASE_API}/all-user`, {
            headers: {
                apiKey: API_KEY,
                Authorization: `Bearer ${token}`,
            },
        });

        setUserData(res.data.data);
    };

    useEffect(() => {
        getUsersData();
    }, []);
    return (
        <div>
            <p>ini Dashboard</p>
            <Table data={userData} />
        </div>
    );
}
