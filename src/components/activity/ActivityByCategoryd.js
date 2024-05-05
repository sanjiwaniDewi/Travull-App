import ActivitiesByCategory from "./ActivitiesByCategory";

export default function ActivityByCategoryId({ categoryName, data }) {
    return (
        <section className="mt-12 container mx-auto w-full lg:px-1  px-5">
            <h2 className="text-xl font-bold">
                Berbagai Aktivitas Menarik di {categoryName}
            </h2>
            <p className="text-sm">
                Jadikan liburan ke {categoryName} lebih seru dengan berbagai
                aktivitas dan promo menarik
            </p>
            <div className="mt-4">
                <ActivitiesByCategory data={data} />
            </div>
        </section>
    );
}
