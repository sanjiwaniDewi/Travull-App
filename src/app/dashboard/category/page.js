"use client";
import TabelAllData from "@/components/utils/TableAllData";
import { useGetAllData } from "@/hooks/useGet";
import { useSelector, useDispatch } from "react-redux";
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
        dispatch(setData(res));
    };

    useEffect(() => {
        handleShowAllData();
    }, []);

    return (
        <div className="container mx-auto px-5 pt-20">
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
