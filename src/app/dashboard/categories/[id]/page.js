"use client";
import CategoryForm from "@/components/CategoryForm";
import { useGetDataById } from "@/hooks/useGet";
import { useEffect, useState } from "react";
export default function EditCategoryPage(context) {
    const [categoryData, setCategoryData] = useState();
    const { getCategoryById } = useGetDataById();
    const handleCategoryData = async () => {
        const res = await getCategoryById(context.params.id);
        setCategoryData(res);
    };

    useEffect(() => {
        handleCategoryData();
    }, []);
    return (
        <div className="w-full">
            <CategoryForm categoryData={categoryData} />
        </div>
    );
}
