import { convertPrice } from "@/utils/handleFormatData";

export default function PromoTitle({ promoData }) {
    const promoPrice = convertPrice(promoData.promo_discount_price);

    return (
        <div className="absolute top-0 ms-3 mt-4 w-full h-52">
            <h1 className="font-semibold text-xl text-white mb-1 text-wrap">
                {promoData.title}
            </h1>
            <p className="p-1 text-sm bg-slate-300 w-fit rounded-xl font-semibold">
                {promoData.promo_code}
            </p>
            <div className="flex w-1/2">
                <div className="text-white leading-4 text-xs mt-2 mr-2">
                    <p>Diskon</p>
                    <p>hingga</p>
                </div>

                <p className="text-3xl font-bold text-slate-50 mt-2">
                    {promoPrice.price}
                </p>

                <p className="text-sm font-bold text-slate-50 mt-2">
                    {promoPrice.unit}
                </p>
            </div>
        </div>
    );
}
