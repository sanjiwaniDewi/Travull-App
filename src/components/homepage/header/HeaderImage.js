"use client";
import { useGetAllData } from "@/hooks/useGet";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";

export default function HeaderImage() {
    const [data, setData] = useState();
    const { getAllBennerData } = useGetAllData();
    const loadedImage = async () => {
        const res = await getAllBennerData();
        setData(res);
    };

    useEffect(() => {
        loadedImage();
    }, []);

    return (
        <div className="relative w-full h-screen ">
            <div className="w-full h-screen absolute">
                <ImageCarousel datas={data} />
            </div>

            <div className="top-0 w-full  bg-black opacity-50 absolute h-screen"></div>

            <div className="absolute top-0 w-full h-screen flex justify-center items-end">
                <div className="triangle-shape w-screen xl:h-96 h-96 bg-white opacity-70 flex flex-col content-end justify-end">
                    <div className="text-center">
                        <h1 className="text-5xl mb-2 font-extrabold text-black text-center">
                            Travull
                        </h1>
                        <p>Temukan aktivitas dengan promo menarik</p>
                    </div>

                    <div className="mx-20 mt-4 flex pb-4 flex-wrap gap-x-3 gap-y-2 justify-center ">
                        {data &&
                            data?.map((name, index) => (
                                <div
                                    key={index}
                                    className="text-center text-sm font-medium border-2 border-slate-300 py-1 px-1 content-center rounded-pill "
                                >
                                    {name.name}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
