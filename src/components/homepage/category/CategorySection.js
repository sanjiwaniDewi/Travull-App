import CategoryData from "./CategoryData";
export default function CategorySection() {
    return (
        <div className="mt-12 container mx-auto w-full px-5 ">
            <div>
                <h2 className="text-xl font-bold">Destinasi Populer</h2>
                <p className="text-sm">Pilihan destinasi yang anda inginkan </p>
            </div>
            <div>
                <CategoryData />
            </div>
        </div>
    );
}
