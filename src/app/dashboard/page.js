"use client";
import { API_KEY, BASE_API } from "@/API/api";
import axios from "axios";

import { useState, useEffect } from "react";
import AllUser from "@/components/AllUser";
import ShortTableUser from "@/components/ShortTableUser";

export default function DashboardPage() {
    const [latesUsers, setLatestUsers] = useState();

    const getAllDataUsers = async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const res = await axios.get(`${BASE_API}/all-user`, {
                headers: {
                    apiKey: API_KEY,
                    Authorization: `Bearer ${token}`,
                },
            });

            const newData = res.data.data.map((item, index) => {
                {
                    return {
                        ...item,
                        no: index + 1,
                    };
                }
            });
            const shortData = newData.slice(-5);

            setLatestUsers(shortData);
        }
    };
    useEffect(() => {
        getAllDataUsers();
    }, []);

    console.log(latesUsers);

    return (
        <div className="ms-10 w-full">
            <p className="text-3xl font-bold mb-12 mt-10">Dashboard</p>
            {latesUsers && <ShortTableUser data={latesUsers} />}
        </div>
    );
}
