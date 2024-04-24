import CategoryCard from "./CategoryCard";

export default function CategoryContent({
    category,
    index,
    length,
    large,
    thin,
    padding,
}) {
    return (
        <div className="" key={index}>
            {index < length && (
                <div key={index} className={`text-center py-1 ${padding}`}>
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
