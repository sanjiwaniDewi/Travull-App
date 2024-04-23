import CategoryCard from "./CategoryCard";

export default function CategoryContent({
    category,
    index,
    length,
    large,
    thin,
}) {
    return (
        <div className="" key={index}>
            {index < length && (
                <div key={index} className="text-center py-1 px-1">
                    <CategoryCard
                        data={category}
                        size={index % 2 === 0 ? "large" : "thin"}
                        large={large}
                        thin={thin}
                    />
                </div>
            )}
        </div>
    );
}
