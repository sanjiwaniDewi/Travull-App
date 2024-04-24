import Link from "next/link";
import ImageCarousel from "../utils/ImageCarousel";
import {
    formatDate,
    formatFacilities,
    formatSizeMap,
    priceFormatRp,
} from "@/utils/handleFormatData";
import parse from "html-react-parser";
import Card from "../layout/Card";

export default function ActivityDetail({ data }) {
    const newFacilities = formatFacilities(data.facilities);
    return (
        <div className="lg:w-2/3 w-full">
            <Card>
                <div>
                    {data.imageUrls.length <= 1 ? (
                        <img
                            src={data.imageUrls[0]}
                            className="w-full lg:h-96 h-54 object-cover rounded-2xl"
                            alt="activity image"
                        />
                    ) : (
                        <ImageCarousel
                            images={data.imageUrls}
                            height="lg:h-96 h-54"
                        />
                    )}
                </div>
                <div className="lg:flex gap-4">
                    <div className="lg:w-11/12 pe-4">
                        <div className="text-2xl font-bold mb-2 flex gap-3 mt-8">
                            <h1>{data.title}</h1>
                            <Link
                                href={`/category/${data.category.id}`}
                                className="mx-2 py-1 text-lg   rounded-md font-semiBold  text-blue-400 underline"
                            >
                                {data.category.name}
                            </Link>
                        </div>
                        <div className="flex gap-1 text-sm font-normal text-sky-700">
                            <p>Rating: {data.rating}/5</p>
                            <p>{`(${priceFormatRp(
                                data.total_reviews
                            )} reviews)`}</p>
                        </div>

                        <p className=" my-4">{data.description} *</p>

                        <div>
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
                                        {parse(newFacilities)}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="font-semibold my-4">
                            <p>
                                {data.address}, {data.city}, {data.province}
                            </p>
                        </div>
                        {data.price !== data.price_discount && (
                            <div>
                                <p className="text-sm line-through text-slate-400">
                                    Rp {priceFormatRp(data.price)}
                                </p>
                                <div className="text-lg font-bold text-center py-1 mt-2 outline outline-1 outline-slate-300 rounded-3xl text-orange-400">
                                    <p>
                                        Rp. {priceFormatRp(data.price_discount)}
                                    </p>
                                </div>
                            </div>
                        )}
                        {data.price === data.price_discount && (
                            <div className="text-lg font-bold text-center py-1 mt-2 outline outline-1 outline-slate-300 rounded-3xl text-orange-400">
                                <p>Rp {priceFormatRp(data.price)}</p>
                            </div>
                        )}
                    </div>
                    <div className="w-full mt-8">
                        {data.location_maps && (
                            <div className="outline outline-1 outline-slate-300 rounded-3xl">
                                {parse(
                                    formatSizeMap(
                                        data.location_maps,
                                        "100%",
                                        250
                                    )
                                )}
                            </div>
                        )}
                        {!data.location_maps && (
                            <div className="outline outline-1 outline-slate-300 rounded-3xl w-full h-52 flex justify-center items-center text-lg font-semibold text-slate-300">
                                <p>Location Maps empty</p>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}
