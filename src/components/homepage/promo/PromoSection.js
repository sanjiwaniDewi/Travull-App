"use client";
import PromoCarausel from "./PromoCarousel";
import PromoImage from "./PromoImage";
import PromoTitle from "./PromoTitle";
import { useEffect, useState } from "react";
import { useGetAllData } from "@/hooks/useGet";
import { RiDiscountPercentFill } from "react-icons/ri";
import Link from "next/link";

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
        <section className="container mx-auto w-full lg:px-1 px-5 pt-12">
            <div className="grid grid-cols-5 ">
                <div className="col-span-2 flex flex-col justify-center h-52 mt-8 ">
                    <div className="">
                        <div className="text-5xl font-bold mb-1 promoHomepage">
                            <RiDiscountPercentFill />
                        </div>
                        <h1 className="text-3xl font-bold mb-3">
                            Kuy, cek promo untuk liburanmu sekarang!
                        </h1>
                        <Link
                            href="/promo"
                            className="border border-slate-400 font-semibold text-slate-800 text-md  p-2 rounded-xl"
                        >
                            Lihat Semua Promo
                        </Link>
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
