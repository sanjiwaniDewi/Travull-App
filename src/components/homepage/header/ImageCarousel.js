import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageCarousel({ datas }) {
    const settings = {
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        fade: true,
        arrows: false,

        // waitForAnimate: false,
    };
    return (
        <div className="static">
            {datas && (
                <Slider {...settings}>
                    {datas.map((data, index) => (
                        <img
                            key={index}
                            src={data.imageUrl}
                            className=" w-full h-screen object-cover"
                            alt="activity image"
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
