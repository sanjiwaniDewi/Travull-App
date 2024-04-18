"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function CategoriesPage() {
    const [categoriesData, setCategoriesData] = useState();
    const { getAllCategoryData } = useGetAllData();

    const handleShowAllData = async () => {
        await getAllCategoryData().then((res) => setCategoriesData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);
    return (
        <div>
            {categoriesData && (
                <TabelAllData
                    data={categoriesData}
                    type="category"
                    title="All Category Data"
                />
            )}
        </div>
    );
}
