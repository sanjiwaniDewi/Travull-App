"use client";
import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import { setData } from "@/redux/features/data/dataSlice";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function PromosPage() {
    // const [promosData, setPromosData] = useState();
    const { getAllPromoData } = useGetAllData();

    const { data: promoData } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleShowAllData = async () => {
        const res = await getAllPromoData();
        dispatch(setData(res));
        // setPromosData(newPromosData);
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div className="container mx-auto px-5 lg:pt-20 pt-28">
            {promoData && (
                <TabelAllData
                    data={promoData}
                    type="promo"
                    title="Tabel Promo"
                />
            )}
        </div>
    );
}
