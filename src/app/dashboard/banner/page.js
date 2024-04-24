"use client";
import TabelAllData from "@/components/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import { useEffect, useState } from "react";

export default function BannersPage() {
    const [bannerData, setBannerData] = useState();
    const { getAllBennerData } = useGetAllData();
    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllBennerData();
        const newBannerData = res?.map((item, index) => {
            return {
                ...item,
                no: index + 1,
            };
        });
        setBannerData(newBannerData);
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    const handleOnDataChange = () => {
        if (isDelete) {
            handleShowAllData();
            dispatch(changeDeleteSatus());
        } else if (isCreate) {
            handleShowAllData();
            dispatch(changeCreateSatus());
        } else if (isUpdate) {
            handleShowAllData();
            dispatch(changeEditStatus());
        }
    };

    useEffect(() => {
        handleOnDataChange();
    }, [isDelete, isCreate, isUpdate]);

    return (
        <div className="w-full pt-16">
            {bannerData && (
                <TabelAllData
                    data={bannerData}
                    title="Tabel Banner"
                    type="banner"
                />
            )}
        </div>
    );
}
