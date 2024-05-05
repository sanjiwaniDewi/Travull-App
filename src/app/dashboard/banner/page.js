"use client";

import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setData } from "@/redux/features/data/dataSlice";

export default function BannersPage() {
    const { getAllBennerData } = useGetAllData();
    const { data: dataBanner } = useSelector((state) => state.data);

    const dispatch = useDispatch();

    const handleShowAllData = async () => {
        const res = await getAllBennerData();
        dispatch(setData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div className="container mx-auto px-5 lg:pt-20 pt-28">
            {dataBanner && (
                <TabelAllData
                    data={dataBanner}
                    title="Tabel Banner"
                    type="banner"
                />
            )}
        </div>
    );
}
