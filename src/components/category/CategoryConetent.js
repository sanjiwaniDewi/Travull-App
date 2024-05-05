import Link from "next/link";
import CategoryImage from "./CategoryImage";
import LinkButton from "../utils/LinkButton";

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
                            <LinkButton
                                link={`/category/${category.id}`}
                                title={"Lihat Detail"}
                                customStyle={"w-fit"}
                            />
                        )}
                    </div>

                    <CategoryImage image={category.imageUrl} />
                </div>
            )}
        </div>
    );
}
