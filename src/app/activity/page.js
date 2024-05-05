"use client";

import ActivitiesSection from "@/components/activity/ActivitiesSection";
import BannerCarousel from "@/components/banner/BannerCarousel";
import ActivityCountainer from "@/components/homepage/activity/ActivitiesContainer";
import CategorySection from "@/components/homepage/category/CategorySection";
import ImageCarousel from "@/components/utils/ImageCarousel";
import { useGetAllData } from "@/hooks/useGet";
import { useState } from "react";

export default function ActivityPage() {
    const [banners, setBanners] = useState([]);
    const { getAllBennerData } = useGetAllData();
    const getBanner = async () => {
        const res = await getAllBennerData();
        setBanners(res);
    };

    useState(() => {
        getBanner();
    }, []);

    return (
        <div className="">
            <BannerCarousel data={banners} />
            <CategorySection />
            <div className="mb-28">
                <ActivitiesSection />
            </div>
        </div>
    );
}
