"use client";
import BannerForm from "@/components/BannerForm";
import { useGetDataById } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function EditBanerPage(context) {
    const [bannerData, setBannerData] = useState();
    const { getBannerById } = useGetDataById();
    const handleBannerData = async () => {
        const res = await getBannerById(context.params.id);
        setBannerData(res);
    };

    useEffect(() => {
        handleBannerData();
    }, []);
    return (
        <div className="w-full">
            <BannerForm bannerData={bannerData} />
        </div>
    );
}
