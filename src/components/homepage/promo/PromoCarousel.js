import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoImage from "./PromoImage";
import PromoTitle from "./PromoTitle";

export default function PromoCarausel({ data, height, show }) {
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
                    {data.map((data, index) => (
                        <div className="relative" key={index}>
                            <PromoImage
                                imageUrl={data?.imageUrl}
                                height={height}
                            />

                            <PromoTitle promoData={data} height={height} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}
