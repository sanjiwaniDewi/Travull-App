import LinkButton from "@/components/utils/LinkButton";
import ActivityCountainer from "./ActivitiesContainer";

export default function ActivitySection() {
    return (
        <div className="mt-12 container mx-auto w-full lg:px-1 px-5 ">
            <div className="mb-4">
                <h2 className="text-xl font-bold">Aktivitas Populer</h2>
                <p className="text-sm">
                    Liburan seru dengan berbagai aktivitas menarik
                </p>
            </div>
            <div>
                <ActivityCountainer length={6} />
            </div>
            <div className="mt-8 w-full flex justify-center">
                <LinkButton title="Lihat Aktivitas Lainnya" link="/activity" />
            </div>
        </div>
    );
}
