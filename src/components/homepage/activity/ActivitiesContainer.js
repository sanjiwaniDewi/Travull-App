"use client";
import { useGetAllData } from "@/hooks/useGet";
import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import EmptyData from "@/components/utils/EmptyData";

export default function ActivityCountainer({ length }) {
    const [activitiesData, setActivitiesData] = useState([]);
    const { getAllActivityData, loading: loadingActivity } = useGetAllData();

    const handleLoadData = async () => {
        const res = await getAllActivityData();
        setActivitiesData(res);
    };

    useEffect(() => {
        handleLoadData();
    }, []);

    return (
        <div className="w-full">
            {activitiesData && (
                <ActivityCard datas={activitiesData} length={length} />
            )}

            {loadingActivity && <EmptyData heigh={"h-80"} />}
        </div>
    );
}
