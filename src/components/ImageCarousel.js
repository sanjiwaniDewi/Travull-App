import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images, height }) {
    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="w-full">
            {images && (
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`w-full ${height} object-cover rounded-t-2xl`}
                            alt="activity image"
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
