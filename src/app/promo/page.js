"use client";

import { useEffect, useState } from "react";
import { useGetAllData } from "@/hooks/useGet";
import Layout from "@/components/Layout";
import PromoHeader from "@/components/Promo/PromoHeader";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import PromoCards from "@/components/Promo/PromoCards";

export default function PromoPage() {
    const [promos, setPromos] = useState();
    const { getAllPromoData } = useGetAllData();
    const handleShowData = async () => {
        const res = await getAllPromoData();
        setPromos(res);
    };

    useEffect(() => {
        handleShowData();
    }, []);
    return (
        <div className="my-20">
            <PromoHeader data={promos} />
            <PromoCards data={promos} />
            <ActivitySection />
        </div>
    );
}
