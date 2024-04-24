"use client";
import { API_KEY, BASE_API } from "@/API/api";
import axios from "axios";

import { useState, useEffect } from "react";
import AllUser from "@/components/AllUser";
import ShortTableUser from "@/components/ShortTableUser";
import ShortTable from "@/components/ShortTable";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import DetailModal from "@/components/DetailModal";

export default function DashboardPage() {
    const [latesUsers, setLatestUsers] = useState();
    const [lastBanner, setLatestBanner] = useState();
    const [lastPromos, setLatestPromos] = useState();
    const [lastCategories, setLatestCategories] = useState();
    const [lastActivities, setLatestActivities] = useState();
    const { showModal } = useSelector((state) => state.modal);

    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const dispatch = useDispatch();

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

    const handleOndeleteData = () => {
        if (isDelete) {
            getAllDataUsers();
            getAllBanner();
            getAllPromo();
            getAllCategory();
            getAllActivity();
            dispatch(changeDeleteSatus());
        } else if (isCreate) {
            getAllDataUsers();
            getAllBanner();
            getAllPromo();
            getAllCategory();
            getAllActivity();
            dispatch(changeCreateSatus());
        } else if (isUpdate) {
            getAllDataUsers();
            getAllBanner();
            getAllPromo();
            getAllCategory();
            getAllActivity();
            dispatch(changeEditStatus());
        }
    };

    useEffect(() => {
        handleOndeleteData();
    }, [isDelete, isCreate, isUpdate]);

    return (
        <div className=" w-full">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-6 mt-12 ">Dashboard</h1>
            </div>
            <div className="w-full p-6 container mx-auto bg-white border shadow-md border-gray-200 rounded-lg mb-4 ">
                {latesUsers && <ShortTableUser data={latesUsers} />}
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto gap-4">
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

            {showModal && <DetailModal />}
        </div>
    );
}
