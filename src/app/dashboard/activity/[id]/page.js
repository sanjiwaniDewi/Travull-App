"use client";
import ActivityForm from "@/components/ActivityForm";
import { useGetAllData, useGetDataById } from "@/hooks/useGet";
import useUpdate from "@/hooks/useUpdate";
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
