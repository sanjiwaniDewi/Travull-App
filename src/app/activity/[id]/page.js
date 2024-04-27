"use client";
import ActivityDetail from "@/components/activity/ActivityDetail";
import { useGetDataById } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function ActivityDetailPage(context) {
    const [activityData, setActivityData] = useState();
    const { getActivityById } = useGetDataById();

    const handleGetData = async () => {
        const res = await getActivityById(context.params.id);
        setActivityData(res);
    };

    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <div className="container mx-auto lg:px-1 px-5 py-28">
            {activityData && (
                <div className="flex justify-center">
                    <ActivityDetail data={activityData} />
                </div>
            )}
        </div>
    );
}
