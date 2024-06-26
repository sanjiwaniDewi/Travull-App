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
                {data && <ImageCarousel datas={data} />}
                {!data && (
                    <div>
                        <img
                            src="/bc18.countries_japan_crop.jpg"
                            className="w-full h-screen object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="top-0 w-full  bg-black opacity-50 absolute h-screen"></div>

            <div className="absolute top-0 w-full h-screen flex justify-center items-end">
                <div className="triangle-shape w-screen h-full flex flex-col content-end pb-24 justify-end">
                    <div className=" text-primary-100 text-center">
                        <h1 className="title-homepage text-5xl mb-8 font-extrabold ">
                            <span className="text-secondary-100">T</span>ravu
                            <span className="text-secondary-100">lL</span>
                        </h1>
                        <p className="mb-4 text-xl">
                            Temukan aktivitas menarik untuk liburanmu dengan
                            harga terjangkau
                        </p>
                    </div>

                    <div className="mx-20 mt-4 flex pb-4 flex-wrap gap-x-3 gap-y-2 justify-center ">
                        {data &&
                            data?.map((name, index) => (
                                <div
                                    key={index}
                                    className="text-center text-sm font-normal outline outline-1 outline-slate-200  py-1 px-2 content-center text-primary-100 rounded-xl"
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
