import ActivityCountainer from "./ActivitiesContainer";

export default function ActivitySection() {
    return (
        <div className="mt-12 container mx-auto w-full lg:px-1 px-5 ">
            <div>
                <h2 className="text-xl font-bold">Aktivitas Populer</h2>
                <p className="text-sm">
                    Liburan seru dengan berbagai aktivitas menarik
                </p>
            </div>
            <div>
                <ActivityCountainer />
            </div>
        </div>
    );
}
