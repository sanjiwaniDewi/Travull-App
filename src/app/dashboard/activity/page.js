"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function ActivityPage() {
    const [activitiesData, setActivitiesData] = useState();
    const { getAllActivityData } = useGetAllData();

    const handleShowAllData = async () => {
        const res = await getAllActivityData();

        const newActivitiesData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });

        setActivitiesData(newActivitiesData);
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div className="w-full pt-16">
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
