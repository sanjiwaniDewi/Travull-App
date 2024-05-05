"use client";
import ActivityForm from "@/components/dashboard/activity/ActivityForm";
import { useGetDataById } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function EditActivityPage(context) {
    const [activityData, setActivityData] = useState();

    const { getActivityById } = useGetDataById();

    const handleActivityData = async () => {
        const res = await getActivityById(context.params.id);
        setActivityData(res);
    };

    useEffect(() => {
        handleActivityData();
    }, []);

    return (
        <div className="w-full">
            <ActivityForm activityData={activityData} />
        </div>
    );
}
