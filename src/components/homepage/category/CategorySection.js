import CategoriyCarousel from "./CategoryCarousel";
export default function CategorySection() {
    return (
        <div className="mt-12 container mx-auto w-full lg:px-1 px-5 ">
            <div>
                <h2 className="text-xl font-bold">Destinasi Populer</h2>
                <p className="text-sm">Pilihan destinasi yang anda inginkan </p>
            </div>
            <div>
                <CategoriyCarousel />
            </div>
        </div>
    );
}
