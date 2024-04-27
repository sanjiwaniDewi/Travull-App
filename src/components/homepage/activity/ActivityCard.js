import Card from "@/components/layout/Card";
import ImageCarousel from "@/components/utils/ImageCarousel";
import ActivityDescriptionCard from "./ActivityDescriptionCard";
import Link from "next/link";

export default function ActivityCard({ datas, length }) {
    const newLength = length === "all" ? datas.length : length;

    return (
        <div className="w-full">
            {datas && (
                <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 w-full">
                    {datas.map((activity, index) => {
                        if (index < newLength) {
                            return (
                                <Link
                                    href={`/activity/${activity.id}`}
                                    className="w-full min-h-80 bg-white border border-gray-200 rounded-2xl"
                                >
                                    <div className="">
                                        <div className="h-40">
                                            {activity.imageUrls.length <= 1 ? (
                                                <img
                                                    src={activity.imageUrls[0]}
                                                    className="w-full h-full object-cover rounded-t-2xl"
                                                    alt="activity image"
                                                />
                                            ) : (
                                                <ImageCarousel
                                                    images={activity.imageUrls}
                                                    customStyle="rounded-t-2xl"
                                                    height={"h-40"}
                                                    customDots={false}
                                                />
                                            )}
                                        </div>

                                        <div>
                                            <ActivityDescriptionCard
                                                activityData={activity}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
}
