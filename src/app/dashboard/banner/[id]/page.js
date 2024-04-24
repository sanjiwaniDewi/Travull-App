"use client";
import BannerForm from "@/components/dashboard/banner/BannerForm";
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
        <div className="w-full ">
            <div className="w-full mt-20 container mx-auto flex flex-col  items-center ">
                <BannerForm bannerData={bannerData} />
            </div>
        </div>
    );
}
