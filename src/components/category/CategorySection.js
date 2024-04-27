import CategoryContent from "../homepage/category/CategoriyContent";
import EmptyData from "../utils/EmptyData";

export default function CategorySection({ data, loading }) {
    return (
        <section className="mt-12 container mx-auto w-full lg:px-1  px-5">
            <div className="mb-4">
                <h2 className="text-xl font-bold">Destinasi Populer</h2>
                <p className="text-sm">
                    Mengunjungi destinasi yang anda inginkan tambah seru dengan
                    aktivitas menarik
                </p>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-2 flex-wrap">
                {data &&
                    data.map((category, index) => (
                        <CategoryContent
                            key={index}
                            category={category}
                            index={index}
                            length={data.length}
                            colLarge={"col-span-2 w-full"}
                            colThin={"col-span-1 w-full"}
                            padding={
                                index === 0
                                    ? "ps-0"
                                    : index === length - 1
                                    ? "pe-2"
                                    : "ps-2"
                            }
                        />
                    ))}
            </div>
            {loading && <EmptyData heigh={"h-80"} />}
        </section>
    );
}
