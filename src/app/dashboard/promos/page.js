"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function PromosPage() {
    const [promosData, setPromosData] = useState();
    const { getAllPromoData } = useGetAllData();

    const handleShowAllData = async () => {
        await getAllPromoData().then((res) => setPromosData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);
    return (
        <div>
            {promosData && (
                <TabelAllData
                    data={promosData}
                    type="promo"
                    title="All Promo Data"
                />
            )}
        </div>
    );
}
