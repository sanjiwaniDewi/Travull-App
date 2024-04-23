import Link from "next/link";

export default function CategoryCard({ data, size, large, thin }) {
    const customSize = size === "large" ? large : thin;

    const customGrad = size === "large" ? "blueGrad" : "orangeGrad";
    return (
        <Link href={`/category/${data.id}`}>
            <div className={`relative ${customSize} h-52 customMargin`}>
                <div className="h-52 ">
                    <img
                        src={data.imageUrl}
                        className=" w-full h-52 object-cover rounded-3xl"
                        alt="Promo image"
                    />
                </div>
                <div
                    className={`absolute w-full h-full top-0 px-1 start-0 z ${customGrad} rounded-3xl`}
                >
                    <div className="text-xl  font-bold w-full h-full flex justify-center items-end pb-4 text-slate-50">
                        {data.name}
                    </div>
                </div>
            </div>
        </Link>
    );
}
