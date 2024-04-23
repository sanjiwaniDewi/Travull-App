"use client";
import { useGetAllData } from "@/hooks/useGet";
import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";

export default function ActivityCountainer() {
    const [activitiesData, setActivitiesData] = useState([]);
    const { getAllActivityData } = useGetAllData();

    const handleLoadData = async () => {
        const res = await getAllActivityData();
        setActivitiesData(res);
    };

    useEffect(() => {
        handleLoadData();
    }, []);

    return (
        <div className="w-full">
            {activitiesData && <ActivityCard datas={activitiesData} />}
        </div>
    );
}
