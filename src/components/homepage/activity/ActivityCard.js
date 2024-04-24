import Card from "@/components/Card";
import ImageCarousel from "@/components/ImageCarousel";
import ActivityDescriptionCard from "./ActivityDescriptionCard";
import Link from "next/link";

export default function ActivityCard({ datas, length }) {
    const newLength = length === "all" ? datas.length : length;
    console.log("new length", newLength);
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
                                        {activity.imageUrls.length <= 1 ? (
                                            <img
                                                src={activity.imageUrls[0]}
                                                className="w-full h-40 object-cover rounded-t-2xl"
                                                alt="activity image"
                                            />
                                        ) : (
                                            <ImageCarousel
                                                images={activity.imageUrls}
                                            />
                                        )}

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
