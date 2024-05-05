import ImageCarousel from "../utils/ImageCarousel";

export default function BannerCarousel({ data }) {
    return (
        <div className="w-full">
            <ImageCarousel
                images={data.map((item) => item.imageUrl)}
                height={"h-96"}
                width={"w-full"}
                customDots={false}
                customStyle={"rounded-0 mb-0"}
            />
        </div>
    );
}
