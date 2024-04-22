export default function CategoryCard({ data, size }) {
    const customSize = size === "large" ? "w-96" : "w-52";

    const customGrad = size === "large" ? "blueGrad" : "orangeGrad";
    return (
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
                <div className="text-2xl font-bold w-full h-full flex justify-center items-end pb-2 text-slate-50">
                    {data.name}
                </div>
            </div>
        </div>
    );
}
