"use client";
import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import { useEffect, useState } from "react";
import { getBanners, setData } from "@/redux/features/data/dataSlice";

export default function BannersPage() {
    const [bannerData, setBannerData] = useState();
    const { getAllBennerData } = useGetAllData();
    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const { data: dataBanner } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllBennerData();
        dispatch(setData(res));
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
            // handleShowAllData();
            dispatch(changeCreateSatus());
        } else if (isUpdate) {
            // handleShowAllData();
            dispatch(changeEditStatus());
        }
    };

    useEffect(() => {
        handleOnDataChange();
    }, [isDelete, isCreate, isUpdate]);

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
