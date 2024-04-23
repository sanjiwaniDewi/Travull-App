"use client";
import PromoCarausel from "./PromoCarousel";
import PromoImage from "./PromoImage";
import PromoTitle from "./PromoTitle";
import { useEffect, useState } from "react";
import { useGetAllData } from "@/hooks/useGet";

export default function PromoSection() {
    const [promos, setPromos] = useState();
    const { getAllPromoData } = useGetAllData();
    const handleShowData = async () => {
        const res = await getAllPromoData();
        setPromos(res);
    };

    useEffect(() => {
        handleShowData();
    }, []);

    return (
        <section className="container mx-auto w-full px-5">
            <div className="grid grid-cols-5 ">
                <div className="col-span-2 flex flex-col justify-center h-52 mt-8 ">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-3">
                            Kuy, cek promo untuk liburanmu sekarang!
                        </h1>
                        <button className="border border-slate-600 text-blue-700  p-2 rounded-xl">
                            Lihat Semua Promo
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    <PromoCarausel
                        data={promos}
                        height={"h-52"}
                        show={2}
                        length={4}
                    />
                </div>
            </div>
        </section>
    );
}
