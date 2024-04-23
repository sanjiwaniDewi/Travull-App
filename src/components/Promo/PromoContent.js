import Link from "next/link";

export default function PromoContent({ promo }) {
    return (
        <Link href={`/promo/${promo.id}`} className="pb-3">
            <img
                src={promo.imageUrl}
                className="w-full h-40 object-cover rounded-t-2xl"
                alt="activity image"
            />
            <div className="px-3 pt-2">
                <div>
                    <h3 className="text-md font-bold mb-2">{promo.title}</h3>
                    <p className="text-sm mb-1">Kode Promo</p>
                    <p className="px-2 py-2  bg-slate-300 text-black font-medium rounded-md text-sm bg-opacity-50 w-fit">
                        {promo.promo_code}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-medium pt-3 mb-2">
                        *syarat dan ketentuan berlaku
                    </p>
                </div>
            </div>
        </Link>
    );
}
