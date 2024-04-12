"use client";
import { API_KEY, BASE_API } from "@/API/api";
import axios from "axios";

import { useState, useEffect } from "react";
import AllUser from "@/components/AllUser";
import ShortTableUser from "@/components/ShortTableUser";
import ShortTable from "@/components/ShortTable";

export default function DashboardPage() {
    const [latesUsers, setLatestUsers] = useState();
    const [lastBanner, setLatestBanner] = useState();
    const [lastPromos, setLatestPromos] = useState();
    const [lastCategories, setLatestCategories] = useState();
    const [lastActivities, setLatestActivities] = useState();

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
            const shortData = newData.length > 5 ? newData.slice(-5) : newData;

            setLatestUsers(shortData);
        }
    };

    const getAllBanner = async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            try {
                const res = await axios.get(`${BASE_API}/banners`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });

                const newBannerData = res.data.data.map((item, index) => {
                    {
                        return {
                            ...item,
                            no: index + 1,
                        };
                    }
                });
                const sortBannerData =
                    newBannerData.length > 5
                        ? newBannerData.slice(-5)
                        : newBannerData;
                setLatestBanner(sortBannerData);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const getAllPromo = async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            try {
                const res = await axios.get(`${BASE_API}/promos`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });

                const newPromoData = res.data.data.map((item, index) => {
                    {
                        return {
                            ...item,
                            no: index + 1,
                        };
                    }
                });
                const sortPromoData =
                    newPromoData.length > 5
                        ? newPromoData.slice(-5)
                        : newPromoData;
                setLatestPromos(sortPromoData);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const getAllCategory = async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            try {
                const res = await axios.get(`${BASE_API}/categories`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });

                const newCategoiesData = res.data.data.map((item, index) => {
                    {
                        return {
                            ...item,
                            no: index + 1,
                        };
                    }
                });
                const sortCategoiesData =
                    newCategoiesData.length > 5
                        ? newCategoiesData.slice(-5)
                        : newCategoiesData;
                setLatestCategories(sortCategoiesData);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const getAllActivity = async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            try {
                const res = await axios.get(`${BASE_API}/activities`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });

                const newActivitiesData = res.data.data.map((item, index) => {
                    {
                        return {
                            ...item,
                            no: index + 1,
                        };
                    }
                });
                const sortActivitiesData =
                    newActivitiesData.length > 5
                        ? newActivitiesData.slice(-5)
                        : newActivitiesData;
                setLatestActivities(sortActivitiesData);
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        getAllDataUsers();
        getAllBanner();
        getAllPromo();
        getAllCategory();
        getAllActivity();
    }, []);

    return (
        <div className="ms-10 w-full">
            <p className="text-3xl font-bold mb-12 mt-10">Dashboard</p>
            {latesUsers && <ShortTableUser data={latesUsers} />}
            {lastBanner && (
                <ShortTable
                    data={lastBanner}
                    title={"Kelola Banner"}
                    detileLink={"dashboard/banners"}
                    type={"banner"}
                />
            )}
            {lastPromos && (
                <ShortTable
                    data={lastPromos}
                    title={"Kelola Promo"}
                    detileLink={"dashboard/promos"}
                    type={"promo"}
                />
            )}

            {lastCategories && (
                <ShortTable
                    data={lastCategories}
                    title={"Kelola Kategori"}
                    detileLink={"dashboard/categories"}
                    type={"category"}
                />
            )}
            {lastActivities && (
                <ShortTable
                    data={lastActivities}
                    title={"Kelola Aktivitas"}
                    detileLink={"dashboard/activity"}
                    type={"activity"}
                />
            )}
        </div>
    );
}
