export default function PromoImage({ imageUrl, height, padding }) {
    return (
        <div className={padding}>
            {imageUrl && (
                <img
                    src={imageUrl}
                    className={`w-full relative object-cover rounded-3xl ${height}`}
                    alt="Promo image"
                />
            )}
            <div
                className={`absolute top-0 w-full ${padding}  start-0 ${height}`}
            >
                <div
                    className={` bg-black opacity-30 w-full rounded-3xl ${height} ${padding}`}
                ></div>
            </div>
        </div>
    );
}
