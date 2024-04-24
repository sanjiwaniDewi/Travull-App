"use client";
import PromoForm from "@/components/dashboard/promo/PromoForm";
import { useGetDataById } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function EditPromoPage(context) {
    const [promoData, setPromoData] = useState();

    const { getPromoById } = useGetDataById();
    const handlegetPromoData = async () => {
        const res = await getPromoById(context.params.id);
        setPromoData(res);
    };

    useEffect(() => {
        handlegetPromoData();
    }, []);

    return (
        <div className="w-full">
            <PromoForm promoData={promoData} />
        </div>
    );
}
