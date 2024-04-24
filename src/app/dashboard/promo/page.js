"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";

import { useEffect, useState } from "react";

export default function PromosPage() {
    const [promosData, setPromosData] = useState();
    const { getAllPromoData } = useGetAllData();

    const handleShowAllData = async () => {
        const res = await getAllPromoData();
        const newPromosData = res?.map((item, index) => {
            {
                return {
                    ...item,
                    no: index + 1,
                };
            }
        });
        setPromosData(newPromosData);
    };

    useEffect(() => {
        handleShowAllData();
    }, []);
    return (
        <div className="w-full pt-16">
            {promosData && (
                <TabelAllData
                    data={promosData}
                    type="promo"
                    title="Tabel Promo"
                />
            )}
        </div>
    );
}
