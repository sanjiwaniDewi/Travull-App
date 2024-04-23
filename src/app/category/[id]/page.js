"use client";
import CategoriyContent from "@/components/category/CategoryConetent";
import CategoryImage from "@/components/category/CategoryImage";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import { useGetDataById } from "@/hooks/useGet";
import { useState, useEffect } from "react";

export default function CategoryDetailPage(context) {
    const [category, setCategory] = useState([]);

    const { getCategoryById } = useGetDataById();
    const handleCategoryData = async () => {
        const res = await getCategoryById(context.params.id);
        setCategory(res);
    };
    useEffect(() => {
        handleCategoryData();
    }, []);

    return (
        <div className="py-20">
            <div className="container mx-auto w-full px-5">
                <CategoriyContent
                    key={1}
                    category={category}
                    index={1}
                    length={1}
                    showButton={false}
                />
            </div>
            <ActivitySection />
        </div>
    );
}
