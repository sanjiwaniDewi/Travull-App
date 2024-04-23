"use client";
import { useGetDataById } from "@/hooks/useGet";
import { convertPrice, priceFormatRp } from "@/utils/handleFormatData";
import { useState, useEffect } from "react";

export default function PromoDetailPage(context) {
    const [promoDetail, serPromoDetail] = useState();

    const { getPromoById } = useGetDataById();

    const handlegetPromoData = async () => {
        const res = await getPromoById(context.params.id);
        serPromoDetail(res);
    };

    useEffect(() => {
        handlegetPromoData();
    }, []);

    return (
        <div className="container mx-auto flex justify-center px-5">
            {promoDetail && (
                <div className="my-16 lg:w-1/2 p-4  bg-white border border-gray-200 rounded-2xl">
                    <img
                        src={promoDetail.imageUrl}
                        alt="gambar promo"
                        className=" w-full h-96 object-cover rounded-2xl"
                    />
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold mb-2  pt-2 pb-4 ">
                            {promoDetail.title}
                        </h1>
                        <p>{promoDetail.description}</p>
                        <div className="mt-6 text-sm ">
                            <p className="mb-2">
                                Nikmati potongan harga hingga{" "}
                                <span className="font-bold text-md">
                                    {" "}
                                    Rp.{" "}
                                    {priceFormatRp(
                                        promoDetail.promo_discount_price
                                    )}
                                </span>
                            </p>
                            <p>
                                Dengan minimum klaim dari
                                <span className="font-bold text-md">
                                    {" "}
                                    Rp.
                                    {priceFormatRp(
                                        promoDetail.minimum_claim_price
                                    )}
                                </span>
                            </p>
                        </div>
                        <div className="mt-4 border-t border-t-gray-200 pt-2 text-xs font-light">
                            * {promoDetail.terms_condition}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
