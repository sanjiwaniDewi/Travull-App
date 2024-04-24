import ActivityCard from "../homepage/activity/ActivityCard";

export default function ActivitiesByCategory({ data }) {
    return (
        <div className="w-full">
            {data && <ActivityCard datas={data} length="all" />}

            {data.length === 0 && (
                <div className="w-full h-80 flex justify-center items-center">
                    {" "}
                    <p className="text-2xl font-bold text-zinc-400">
                        Tidak ada aktivitas yang tersedia
                    </p>{" "}
                </div>
            )}
        </div>
    );
}
