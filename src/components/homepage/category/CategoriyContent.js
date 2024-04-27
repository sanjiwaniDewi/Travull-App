import CategoryCard from "./CategoryCard";

export default function CategoryContent({
    category,
    index,
    length,
    large,
    thin,
    padding,
    colLarge,
    colThin,
}) {
    return (
        <div className={index % 2 === 0 ? colLarge : colThin}>
            {index < length && (
                <div className={`text-center py-1 ${padding}`}>
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
