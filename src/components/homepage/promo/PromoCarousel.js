import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoImage from "./PromoImage";
import PromoTitle from "./PromoTitle";
import Link from "next/link";
import EmptyData from "@/components/utils/EmptyData";

export default function PromoCarausel({ data, height, show, length, loading }) {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: show,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className=" mt-8">
            {data && (
                <Slider {...settings}>
                    {data.map((data, index) => {
                        if (index < length) {
                            return (
                                <Link
                                    href={`/promo/${data?.id}`}
                                    className="relative"
                                    key={index}
                                >
                                    <PromoImage
                                        imageUrl={data?.imageUrl}
                                        height={height}
                                        padding={
                                            index === 0
                                                ? "ps-0"
                                                : index === length - 1
                                                ? "px-2"
                                                : "ps-2"
                                        }
                                    />

                                    <PromoTitle
                                        promoData={data}
                                        height={height}
                                    />
                                </Link>
                            );
                        }
                    })}
                </Slider>
            )}
            {loading && <EmptyData heigh={height} />}
        </div>
    );
}
