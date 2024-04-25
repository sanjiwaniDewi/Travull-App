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
import { setData } from "@/redux/features/data/dataSlice";

export default function CategoriesPage() {
    const [categoriesData, setCategoriesData] = useState();
    const { getAllCategoryData } = useGetAllData();
    const { isDelete, isUpdate, isCreate } = useSelector(
        (state) => state.status
    );
    const { data: dataCategory } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const handleShowAllData = async () => {
        const res = await getAllCategoryData();

        // const newCategoriesData = res;
        // setCategoriesData(newCategoriesData);
        dispatch(setData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    const handleOnDataChange = () => {
        if (isDelete) {
            // handleShowAllData();
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
        <div className="w-full pt-16 px-10">
            {dataCategory && (
                <TabelAllData
                    data={dataCategory}
                    type="category"
                    title="Tabel Destinasi"
                />
            )}
        </div>
    );
}
