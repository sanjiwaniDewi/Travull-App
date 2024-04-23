import CategoryContent from "../homepage/category/CategoriyContent";

export default function CategorySection({ data }) {
    return (
        <section className="mt-12 container mx-auto w-full px-5">
            <div>
                <h2 className="text-xl font-bold">Destinasi Populer</h2>
                <p className="text-sm">
                    Mengunjungi destinasi yang anda inginkan tambah seru dengan
                    aktivitas menarik
                </p>
            </div>
            <div className="flex justify-between flex-wrap gap-y-2 ">
                {data &&
                    data.map((category, index) => (
                        <CategoryContent
                            key={index}
                            category={category}
                            index={index}
                            length={data.length}
                            large={"lg:w-96 md:80 w-56"}
                            thin={"lg:w-80 md:52 w-44"}
                        />
                    ))}
            </div>
        </section>
    );
}
