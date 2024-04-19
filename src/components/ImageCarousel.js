import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    console.log(images);

    return (
        <div className="w-96">
            {images && (
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-96 object-cover"
                            alt="activity image"
                        />
                    ))}
                </Slider>
            )}
        </div>
    );
}
