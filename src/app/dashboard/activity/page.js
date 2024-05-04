"use client";
import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/redux/features/data/dataSlice";

export default function ActivityPage() {
    const { getAllActivityData } = useGetAllData();

    const { data: activitiesData } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllActivityData();

        dispatch(setData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div className="container mx-auto px-5 lg:pt-20 pt-28">
            {activitiesData && (
                <TabelAllData
                    data={activitiesData}
                    type="activity"
                    title="Tabel Aktivitas"
                />
            )}
        </div>
    );
}
