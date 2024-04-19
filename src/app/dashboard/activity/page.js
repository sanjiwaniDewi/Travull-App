"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function ActivityPage() {
    const [activitiesData, setActivitiesData] = useState();
    const { getAllActivityData } = useGetAllData();

    const handleShowAllData = async () => {
        await getAllActivityData().then((res) => setActivitiesData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div>
            {activitiesData && (
                <TabelAllData
                    data={activitiesData}
                    type="activity"
                    title="All Activity Data"
                />
            )}
        </div>
    );
}
