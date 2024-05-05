"use client";

import { useSelector, useDispatch } from "react-redux";
import ImageCarousel from "../../utils/ImageCarousel";
import {
    formatDate,
    formatFacilities,
    formatSizeMap,
    priceFormatRp,
} from "@/utils/handleFormatData";
import parse from "html-react-parser";
import { setModalData, setModalType } from "@/redux/features/modal/modalSlice";
import { useGetDataById } from "@/hooks/useGet";
import ImagePreview from "@/components/utils/ImagePreview";

export default function DetailActivity() {
    const { modalData } = useSelector((state) => state.modal);
    const { getCategoryById } = useGetDataById();
    const dispatch = useDispatch();

    let dataCategory = {};
    const newFacilities =
        modalData.facilities !== null
            ? formatFacilities(modalData.facilities)
            : null;
    const handleShowCategory = async () => {
        await getCategoryById(modalData.category.id).then(
            (res) => (dataCategory = res)
        );
        dispatch(setModalData(dataCategory));
        dispatch(setModalType("category"));
    };

    return (
        <div className="oferflow-y-scroll">
            <div className="w-96">
                <div className="">
                    {modalData.imageUrls.length === 1 ? (
                        <ImagePreview
                            figureUrl={modalData.imageUrls.join("")}
                            customHeigh="h-44"
                        />
                    ) : (
                        <ImageCarousel
                            images={modalData.imageUrls}
                            height="h-44"
                            width="w-96"
                        />
                    )}
                </div>

                <div className="text-2xl font-bold mb-3 flex gap-3 mt-8">
                    <h1>{modalData.title}</h1>
                    <button
                        onClick={handleShowCategory}
                        className="mx-2 px-2 py-2 text-sm  rounded-md font-normal bg-slate-100 text-blue-400 underline"
                    >
                        {modalData.category.name}
                    </button>
                </div>

                <div className="flex gap-2 justify-between text-md mb-4 ">
                    <p>Dibuat : {formatDate(modalData.createdAt)}</p>
                    <p>Diupdate: {formatDate(modalData.updatedAt)}</p>
                </div>
                <div className="pb-4">
                    <p className="w-96">{modalData.description} *</p>
                </div>
                <div className="mb-4 px-1">
                    {Array.isArray(newFacilities) ? (
                        <div className="flex gap-2">
                            {newFacilities.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-sm outline py-1 rounded-3xl outline-slate-200 w-fit px-2"
                                >
                                    {parse(item)}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className="text-sm outline py-1 rounded-3xl outline-slate-200 w-fit px-2">
                                {newFacilities &&
                                newFacilities.length !== 0 &&
                                newFacilities !== null
                                    ? parse(newFacilities)
                                    : "tidak ada fasilitas"}
                            </p>
                        </div>
                    )}
                </div>

                {modalData.price !== modalData.price_discount &&
                    modalData.price_discount && (
                        <div>
                            <p className="text-sm line-through text-slate-400">
                                Rp{" "}
                                {modalData.price &&
                                    priceFormatRp(modalData.price)}
                            </p>
                            <div className="text-lg font-bold text-center py-1 mt-2 outline outline-1 outline-slate-300 rounded-3xl text-orange-400">
                                <p>
                                    Rp.{" "}
                                    {modalData.price_discount &&
                                        priceFormatRp(modalData.price_discount)}
                                </p>
                            </div>
                        </div>
                    )}
                {modalData.price === modalData.price_discount ||
                    (!modalData.price_discount && (
                        <div className="text-lg font-bold text-center py-1 mt-2 outline outline-1 outline-slate-300 rounded-3xl text-orange-400">
                            <p>Rp {priceFormatRp(modalData.price)}</p>
                        </div>
                    ))}

                <div className="w-96 mt-4 mb-4">
                    <p>
                        Alamat : {modalData.address}, {modalData.city},{" "}
                        {modalData.province}
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="">
                    {modalData.location_maps !== null
                        ? parse(
                              formatSizeMap(
                                  modalData.location_maps,
                                  "100%",
                                  200
                              )
                          )
                        : "tidak ada peta lokasi"}
                </div>
            </div>
        </div>
    );
}
