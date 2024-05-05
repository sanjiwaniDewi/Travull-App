import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriyContent from "./CategoryConetent";
import EmptyData from "@/components/utils/EmptyData";

export default function CategoryCarousel({ data, length, loading }) {
    const settings = {
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
            {loading && <EmptyData heigh={"h-80"} />}
        </div>
    );
}
