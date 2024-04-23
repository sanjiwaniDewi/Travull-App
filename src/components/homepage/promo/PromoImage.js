export default function PromoImage({ imageUrl, height }) {
    return (
        <div className="px-2 ">
            {imageUrl && (
                <img
                    src={imageUrl}
                    className={`w-full relative object-cover rounded-3xl ${height}`}
                    alt="Promo image"
                />
            )}
            <div className={`absolute top-0 w-full  px-2 start-0 ${height}`}>
                <div
                    className={` bg-black opacity-30 w-full rounded-3xl ${height}`}
                ></div>
            </div>
        </div>
    );
}
