import CategoryImage from "./CategoryImage";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CategoriyContent from "./CategoryConetent";

export default function CategoryCarousel({ data, length }) {
    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        fade: true,
    };
    return (
        <div className=" h-100">
            {data && (
                <Slider {...settings}>
                    {data.map((category, index) => (
                        <CategoriyContent
                            key={index}
                            category={category}
                            index={index}
                            length={length}
                            showButton={true}
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
