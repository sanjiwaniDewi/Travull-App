"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function BannersPage() {
    const [bannerData, setBannerData] = useState();
    const { getAllBennerData } = useGetAllData();

    const handleShowAllData = async () => {
        await getAllBennerData().then((res) => setBannerData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

  

    return (
        <div>
            {bannerData && (
                <TabelAllData
                    data={bannerData}
                    title="All Banners Data"
                    type="banner"
                />
            )}
        </div>
    );
}
