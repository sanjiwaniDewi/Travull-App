"use client";
import { useGetAllData } from "@/hooks/useGet";
import { useEffect, useState } from "react";

export default function CategoryButton({
    handleCategoriBtn,
    handleAllCategoryBtn,
}) {
    const [categories, setCategories] = useState([]);
    const { getAllCategoryData } = useGetAllData();
    const handleShowAllCategory = async () => {
        const res = await getAllCategoryData();
        setCategories(res);
    };
    useEffect(() => {
        handleShowAllCategory();
    }, []);

    const handleOnClickButton = (id) => {
        handleCategoriBtn(id);
    };

    return (
        <div className="flex gap-x-3  gap-y-2 flex-wrap">
            <button
                onClick={handleAllCategoryBtn}
                className="text-sm outline outline-1 outline-slate-300 px-2 py-1 rounded-3xl"
            >
                All
            </button>
            {categories &&
                categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleOnClickButton(category.id)}
                        className="text-sm outline outline-1 outline-slate-300 px-2 py-1 rounded-3xl"
                    >
                        {category.name}
                    </button>
                ))}
        </div>
    );
}
