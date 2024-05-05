"use client";
import ActivityDetail from "@/components/activity/ActivityDetail";
import Card from "@/components/layout/Card";
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
        <div className="container mx-auto lg:px-1 px-5 py-32">
            {activityData && (
                <div className="flex justify-center">
                    <ActivityDetail data={activityData} />
                </div>
            )}
            {!activityData && (
                <div className="h-96 mb-16 ">
                    <Card>
                        <div className="h-96 flex justify-center items-center ">
                            <h1 className="text-2xl font-bold text-zinc-300 flex justify-center ">
                                Aktivitas Tidak Ditemukan
                            </h1>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
