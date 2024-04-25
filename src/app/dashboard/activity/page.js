"use client";
import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import {
    changeCreateSatus,
    changeDeleteSatus,
    changeEditStatus,
} from "@/redux/features/status/statusSilce";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/redux/features/data/dataSlice";

export default function ActivityPage() {
    // const [activitiesData, setActivitiesData] = useState();
    const { getAllActivityData } = useGetAllData();
    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const { data: activitiesData } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllActivityData();

        dispatch(setData(res));

        // setActivitiesData(res);
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    // const handleOnDataChange = () => {
    //     if (isDelete) {
    //         // handleShowAllData();
    //         dispatch(changeDeleteSatus());
    //     } else if (isCreate) {
    //         // handleShowAllData();
    //         dispatch(changeCreateSatus());
    //     } else if (isUpdate) {
    //         // handleShowAllData();
    //         dispatch(changeEditStatus());
    //     }
    // };

    // useEffect(() => {
    //     handleOnDataChange();
    // }, [isDelete, isCreate, isUpdate]);

    return (
        <div className="w-full pt-16 px-10">
            {activitiesData && (
                <TabelAllData
                    data={activitiesData}
                    type="activity"
                    title="Tabel Aktivitas"
                />
            )}
        </div>
    );
}
