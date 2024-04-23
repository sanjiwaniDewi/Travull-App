import Link from "next/link";
import CategoryImage from "./CategoryImage";

export default function CategoriyContent({
    category,
    index,
    length,
    showButton,
}) {
    return (
        <div className="w-full h-full" key={index}>
            {index <= length && (
                <div className="flex justify-between ps-2">
                    <div className="me-4 flex flex-col w-1/3 justify-center  text-black">
                        <h2 className="lg:text-5xl text-3xl font-bold mb-2 ">
                            {category.name}
                        </h2>
                        <p className="text-sm mb-4">
                            Temukan aktivitas menarik untuk liburanmu
                        </p>
                        {showButton && (
                            <Link
                                href={`/category/${category.id}`}
                                className="border border-slate-600 text-blue-700  p-1 w-32 rounded-xl text-center"
                            >
                                Lihat Detail
                            </Link>
                        )}
                    </div>

                    <CategoryImage image={category.imageUrl} />
                </div>
            )}
        </div>
    );
}
