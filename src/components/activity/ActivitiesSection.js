"use client";
import { useState } from "react";
import { useGetDataById } from "@/hooks/useGet";
import ActivityCountainer from "../homepage/activity/ActivitiesContainer";
import CategoryButton from "./CategoryButton";
import ActivitiesByCategory from "./ActivitiesByCategory";

export default function ActivitiesSection() {
    const [activities, setActivities] = useState();

    const { getActivitiesByCategoryId } = useGetDataById();

    const handleCategoriBtn = async (id) => {
        const res = await getActivitiesByCategoryId(id);
        setActivities(res);
    };

    const handleAllCategoryBtn = () => {
        setActivities();
    };

    return (
        <div className="container mx-auto lg:px-1 px-5 mt-12">
            <div className=" container mx-auto w-full">
                <h2 className="text-xl font-bold">
                    Temukan Semua Aktivitas Menarik untuk Liburanmu
                </h2>
                <p className="text-sm">
                    Pliih aktivitas berdasarkan destinasi yang kamu tuju dan
                    temukan promo menarik
                </p>
            </div>
            <div>
                <div className="py-4">
                    <CategoryButton
                        handleCategoriBtn={handleCategoriBtn}
                        handleAllCategoryBtn={handleAllCategoryBtn}
                    />
                </div>
                <div>
                    {activities && <ActivitiesByCategory data={activities} />}
                    {!activities && <ActivityCountainer length="all" />}
                </div>
            </div>
        </div>
    );
}
