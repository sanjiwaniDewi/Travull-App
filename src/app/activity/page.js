import ActivitiesSection from "@/components/activity/ActivitiesSection";
import ActivityCountainer from "@/components/homepage/activity/ActivitiesContainer";
import CategorySection from "@/components/homepage/category/CategorySection";

export default function ActivityPage() {
    return (
        <div className="py-20">
            <div className=" container mx-auto w-full lg:px-1 px-5 ">
                <h2 className="text-xl font-bold">
                    Temukan aktivitas menarik untuk liburanmu
                </h2>
                <p className="text-sm">
                    Pliih aktivitas berdasarkan destinasi yang kamu tuju dan
                    temukan discount menarik
                </p>
            </div>
            <ActivitiesSection />
            <CategorySection />
        </div>
    );
}
