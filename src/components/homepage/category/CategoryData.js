"use client";
import Card from "@/components/Card";
import { useGetAllData } from "@/hooks/useGet";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategoriesData() {
    const [dataCategory, setDataCategory] = useState();
    const { getAllCategoryData } = useGetAllData();

    const loadedCategory = async () => {
        const res = await getAllCategoryData();
        setDataCategory(res);
    };
    useEffect(() => {
        loadedCategory();
    }, []);

    const settings = {
        // dots: true,
        // dots: true,
        // infinite: true,
        className: "slider variable-width",
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
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
        <div className="slider-container">
            {dataCategory && (
                <Slider {...settings}>
                    {dataCategory?.map((category, index) => {
                        if (index <= 4) {
                            if ((index + 1) % 2 === 0) {
                                return (
                                    <div
                                        key={index}
                                        className="text-center py-1 px-1"
                                    >
                                        <CategoryCard
                                            data={category}
                                            size="large"
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="text-center py-1"
                                    >
                                        <CategoryCard
                                            data={category}
                                            size="thin"
                                        />
                                    </div>
                                );
                            }
                        }
                    })}
                </Slider>
            )}
        </div>
    );
}
