"use client";
import ActivityByCategoryId from "@/components/activity/ActivityByCategoryd";
import CategoriyContent from "@/components/category/CategoryConetent";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import { useGetDataById } from "@/hooks/useGet";
import { useState, useEffect } from "react";

export default function CategoryDetailPage(context) {
    const [category, setCategory] = useState([]);
    const [activityByCategoryId, setActivityByCategoryId] = useState([]);
    const { getCategoryById } = useGetDataById();
    const { getActivitiesByCategoryId } = useGetDataById();

    const handleCategoryData = async () => {
        const res = await getCategoryById(context.params.id);
        setCategory(res);
    };

    const handleActivityData = async () => {
        const res = await getActivitiesByCategoryId(context.params.id);
        setActivityByCategoryId(res);
    };

    useEffect(() => {
        handleCategoryData();
        handleActivityData();
    }, []);

    return (
        <div className="py-28">
            <div className="container mx-auto w-full px-5 mb-16">
                <CategoriyContent
                    key={1}
                    category={category}
                    index={1}
                    length={1}
                    showButton={false}
                />
            </div>

            <ActivityByCategoryId
                data={activityByCategoryId}
                categoryName={category.name}
            />

            <ActivitySection />
        </div>
    );
}
