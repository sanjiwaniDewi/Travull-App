"use client";
import { formatDate } from "@/utils/handleFormatData";
import { useSelector } from "react-redux";
export default function DetailPromo() {
    const { modalData } = useSelector((state) => state.modal);
    console.log(modalData);
    return (
        <div>
            <div>
                <img
                    src={modalData.imageUrl}
                    className="w-96 object-cover"
                    alt="banner image"
                />
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {modalData.title}
                    <span className="mx-2 px-2 py-2 text-sm  rounded-md font-normal bg-slate-100 text-red-400">
                        {modalData.promo_code}
                    </span>
                </h1>
                <h2>Status:</h2>
                <div className="flex gap-2 ">
                    <p>Dibuat : {formatDate(modalData.createdAt)}</p>
                    <p>Diupdate: {formatDate(modalData.updatedAt)}</p>
                </div>
                <p className=" max-w-96">{modalData.description} *</p>
                <p>Harga Promo : {modalData.promo_discount_price}</p>
                <p>Minimum Klaim Promo : {modalData.minimum_claim_price}</p>
                <p className=" text-sm font-light max-w-96">
                    *{modalData.terms_condition}
                </p>
            </div>
        </div>
    );
}
