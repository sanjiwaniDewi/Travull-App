export default function PromoImage({ imageUrl }) {
    return (
        <div className="px-2">
            {imageUrl && (
                <img
                    src={imageUrl}
                    className="w-full h-52 relative object-cover rounded-3xl"
                    alt="Promo image"
                />
            )}
            <div className="absolute top-0 w-full h-52 px-2 start-0">
                <div className=" bg-black opacity-30 w-full h-52 rounded-3xl"></div>
            </div>
        </div>
    );
}
