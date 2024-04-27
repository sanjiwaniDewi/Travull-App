import { FaDivide } from "react-icons/fa";
import PromoContent from "./PromoContent";
import EmptyData from "../utils/EmptyData";

export default function PromoCards({ data }) {
    return (
        <section className="container my-auto mx-auto  lg:px-1 px-5 pt-16">
            <div className="mb-4">
                <h2 className="text-xl font-bold">
                    Promo Menarik Menanti Anda
                </h2>
                <p className="text-sm">
                    Nikmati liburan serumu bersama keluarga dengan promo-promo
                    nemarik Travull
                </p>
            </div>

            <div className="w-full">
                {data && (
                    <div className="grid xl:grid-cols-6  md:grid-cols-3 grid-cols-2 gap-2 w-full">
                        {data.map((promo, index) => (
                            <div
                                key={index}
                                className="w-full bg-white border border-gray-200 rounded-2xl"
                            >
                                <PromoContent promo={promo} />
                            </div>
                        ))}
                    </div>
                )}
                {!data && <EmptyData heigh={"h-80"} />}
            </div>
        </section>
    );
}
