import { priceFormatRp } from "@/utils/handleFormatData";

export default function ActivityDescriptionCard({ activityData }) {
    return (
        <div className="mt-2 mx-3">
            <h1 className="text-md font-bold mb-1">{activityData.title}</h1>
            <div className="flex gap-2 text-xs font-medium mb-1">
                <p>{activityData.rating}/5</p>
                <p>{`(${activityData.total_reviews} reviews)`}</p>
            </div>
            <p className="text-sm font-medium">{`${activityData.city}, ${activityData.province}`}</p>

            <div className="mt-3">
                {activityData.price !== activityData.price_discount && (
                    <p className="text-sm font-medium line-through text-slate-400">
                        IDR {priceFormatRp(activityData.price)}
                    </p>
                )}
                {activityData.price === activityData.price_discount ? (
                    <p className="text-sm font-bold">
                        IDR {priceFormatRp(activityData.price)}
                    </p>
                ) : (
                    <p className="text-sm font-bold text-orange-600">
                        IDR {priceFormatRp(activityData.price_discount)}
                    </p>
                )}
            </div>
        </div>
    );
}
