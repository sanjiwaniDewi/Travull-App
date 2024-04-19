"use client";

import { useSelector, dispatch, useDispatch } from "react-redux";
import ImageCarousel from "./ImageCarousel";
import { formatDate } from "@/utils/handleFormatData";
import parse from "html-react-parser";
import { setModalData, setModalType } from "@/redux/features/modal/modalSlice";
import { useGetDataById } from "@/hooks/useGet";

export default function DetailActivity() {
    const { modalData } = useSelector((state) => state.modal);
    const { getCategoryById } = useGetDataById();
    const dispatch = useDispatch();

    let dataCategory = {};
    const handleShowCategory = async () => {
        await getCategoryById(modalData.category.id).then(
            (res) => (dataCategory = res)
        );
        dispatch(setModalData(dataCategory));
        dispatch(setModalType("category"));
    };
    console.log(dataCategory);

    console.log(modalData);

    return (
        <div className="flex gap-4 ">
            <div>
                <ImageCarousel images={modalData.imageUrls} />
                <div className="text-2xl font-bold mb-3 flex gap-3 mt-8">
                    <h1>{modalData.title}</h1>
                    <button
                        onClick={handleShowCategory}
                        className="mx-2 px-2 py-2 text-sm  rounded-md font-normal bg-slate-100 text-blue-400 underline"
                    >
                        {modalData.category.name}
                    </button>
                </div>
                <h2>Status:</h2>
                <div className="flex gap-2 ">
                    <p>Dibuat : {formatDate(modalData.createdAt)}</p>
                    <p>Diupdate: {formatDate(modalData.updatedAt)}</p>
                </div>
                <p className="w-96">{modalData.description} *</p>
                <p>Harga: {modalData.price}</p>
                <p>Potongan : {modalData.price_discount}</p>

                <div>{parse(modalData.facilities)}</div>

                <div className="w-96">
                    <p>
                        Alamat : {modalData.address}, {modalData.city},{" "}
                        {modalData.province}
                    </p>
                </div>
            </div>
            <div className="w-fit">
                <div className="">{parse(modalData.location_maps)}</div>
            </div>
        </div>
    );
}
