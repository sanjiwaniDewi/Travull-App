"use client";

import { useState, useEffect } from "react";
import { useGetAllData } from "@/hooks/useGet";
import CategoryCarousel from "@/components/category/CategoryCarousel";
import PromoCarausel from "@/components/homepage/promo/PromoCarousel";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import CategorySection from "@/components/category/CategorySection";

export default function CategoryPage() {
    const [categoies, setCategories] = useState([]);
    const [promo, setPromo] = useState([]);
    const { getAllCategoryData, getAllPromoData, loading } = useGetAllData();

    const handleLoadCategoryData = async () => {
        const res = await getAllCategoryData();
        setCategories(res);
    };

    const handleLoadPromoData = async () => {
        const res = await getAllPromoData();
        setPromo(res);
    };

    useEffect(() => {
        handleLoadPromoData();
        handleLoadCategoryData();
    }, []);

    return (
        <div className="py-28">
            <div className="container mx-auto lg:px-1 px-5 ">
                <CategoryCarousel
                    data={categoies}
                    length={categoies.length}
                    loading={loading}
                />

                <PromoCarausel
                    data={promo}
                    height={"h-32"}
                    show={4}
                    length={promo.length}
                    loading={loading}
                />
            </div>

            <CategorySection data={categoies} loading={loading} />
            <ActivitySection />
        </div>
    );
}
