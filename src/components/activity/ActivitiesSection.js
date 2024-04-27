"use client";
import { useState } from "react";
import ActivityCountainer from "../homepage/activity/ActivitiesContainer";
import CategoryButton from "./CategoryButton";
import { useGetDataById } from "@/hooks/useGet";
import ActivitiesByCategory from "./ActivitiesByCategory";
useGetDataById;

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
        <div className="container mx-auto lg:px-1 px-5">
            <div>
                <h2></h2>
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
