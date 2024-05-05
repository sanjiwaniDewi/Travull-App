"use client";

import axios from "axios";
import DetailModal from "@/components/utils/DetailModal";
import ShortTableUser from "@/components/dashboard/user/ShortTableUser";
import ShortTable from "@/components/utils/ShortTable";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { API_KEY, BASE_API } from "@/API/api";

export default function DashboardPage() {
    const [latesUsers, setLatestUsers] = useState();
    const [lastBanner, setLatestBanner] = useState();
    const [lastPromos, setLatestPromos] = useState();
    const [lastCategories, setLatestCategories] = useState();
    const [lastActivities, setLatestActivities] = useState();
    const { showModal } = useSelector((state) => state.modal);

    const {
        getAllActivityData,
        getAllBennerData,
        getAllCategoryData,
        getAllPromoData,
    } = useGetAllData();

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
            const shortData = newData.length > 3 ? newData.slice(-3) : newData;

            setLatestUsers(shortData);
        }
    };

    const getAllBanner = async () => {
        const res = await getAllBennerData();

        const newBannerData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });
        const sortBannerData =
            newBannerData.length > 3 ? newBannerData.slice(-3) : newBannerData;
        setLatestBanner(sortBannerData);
    };

    const getAllPromo = async () => {
        const res = await getAllPromoData();

        const newPromoData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });
        const sortPromoData =
            newPromoData.length > 3 ? newPromoData.slice(-3) : newPromoData;
        setLatestPromos(sortPromoData);
    };

    const getAllCategory = async () => {
        const res = await getAllCategoryData();

        const newCategoiesData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });
        const sortCategoiesData =
            newCategoiesData.length > 3
                ? newCategoiesData.slice(-3)
                : newCategoiesData;
        setLatestCategories(sortCategoiesData);
    };

    const getAllActivity = async () => {
        const res = await getAllActivityData();

        const newActivitiesData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });
        const sortActivitiesData =
            newActivitiesData.length > 3
                ? newActivitiesData.slice(-3)
                : newActivitiesData;
        setLatestActivities(sortActivitiesData);
    };

    useEffect(() => {
        getAllDataUsers();
        getAllBanner();
        getAllPromo();
        getAllCategory();
        getAllActivity();
    }, []);

    return (
        <div className=" w-full">
            <div className="container mx-auto lg:px-1 px-5">
                <h1 className="text-4xl font-bold mb-6 lg:pt-12 pt-24 ">
                    Dashboard
                </h1>
            </div>
            <div className="container mx-auto lg:px-1 px-5 ">
                <div className="p-6 bg-slate-50 border shadow-md border-gray-200 rounded-lg mb-4  ">
                    {latesUsers && <ShortTableUser data={latesUsers} />}
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto lg:px-1 px-5 gap-4">
                {lastBanner && (
                    <ShortTable
                        data={lastBanner}
                        title={"Kelola Banner"}
                        detileLink={"dashboard/banner"}
                        type={"banner"}
                    />
                )}
                {lastPromos && (
                    <ShortTable
                        data={lastPromos}
                        title={"Kelola Promo"}
                        detileLink={"dashboard/promo"}
                        type={"promo"}
                    />
                )}

                {lastCategories && (
                    <ShortTable
                        data={lastCategories}
                        title={"Kelola Destinasi"}
                        detileLink={"dashboard/category"}
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

            {showModal && <DetailModal />}
        </div>
    );
}
