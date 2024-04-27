"use client";
import Card from "@/components/layout/Card";
import { useGetAllData } from "@/hooks/useGet";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryContent from "./CategoriyContent";
import EmptyData from "@/components/utils/EmptyData";

export default function CategoriyCarousel() {
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
        slidesToScroll: 4,
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
                    {dataCategory?.map((category, index) => (
                        <CategoryContent
                            category={category}
                            index={index}
                            length={6}
                            large={"w-96"}
                            thin={"w-52"}
                        />
                    ))}
                </Slider>
            )}
            {!dataCategory && <EmptyData heigh={"h-52"} />}
        </div>
    );
}
