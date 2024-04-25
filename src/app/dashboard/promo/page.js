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

    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
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

    const handleOnDataChange = () => {
        if (isDelete) {
            // handleShowAllData();
            // setBannerData(dataBanner);
            dispatch(changeDeleteSatus());
        } else if (isCreate) {
            console.log("masuk create");
            // handleShowAllData();
            dispatch(changeCreateSatus());
        } else if (isUpdate) {
            console.log("masuk update");
            // handleShowAllData();
            dispatch(changeEditStatus());
        }
    };

    useEffect(() => {
        handleOnDataChange();
    }, [isDelete, isCreate, isUpdate]);

    return (
        <div className="w-full pt-16 px-10">
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
