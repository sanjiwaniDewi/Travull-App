import CategoriyCarousel from "./CategoryCarousel";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

export default function CategorySection() {
    return (
        <div className="mt-16 container mx-auto w-full lg:px-1 px-5 ">
            <div className="mb-4 ">
                <div className="flex gap-x-1 text-xl font-bold cursor-pointer hover:text-secondary-300 hover:opacity-60">
                    <Link href="/category" className=" ">
                        Destinasi Populer{" "}
                    </Link>
                    <span className="text-3xl">
                        <MdNavigateNext />
                    </span>
                </div>

                <p className="text-sm">Pilihan destinasi yang anda inginkan </p>
            </div>
            <div>
                <CategoriyCarousel />
            </div>
        </div>
    );
}
