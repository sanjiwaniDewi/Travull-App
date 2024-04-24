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

export default function CategoriesPage() {
    const [categoriesData, setCategoriesData] = useState();
    const { getAllCategoryData } = useGetAllData();
    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllCategoryData();
        setCategoriesData(res);
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
        <div>
            {categoriesData && (
                <TabelAllData
                    data={categoriesData}
                    type="category"
                    title="All Category Data"
                />
            )}
        </div>
    );
}
