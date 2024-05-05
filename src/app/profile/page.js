"use client";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import PromoCarausel from "@/components/homepage/promo/PromoCarousel";
import Profile from "@/components/profile/Profile";
import { useGetAllData } from "@/hooks/useGet";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const [promo, setPromo] = useState([]);

    const userData = useSelector((store) => store.user);
    const { getAllPromoData } = useGetAllData();

    const handleLoadPromoData = async () => {
        const res = await getAllPromoData();
        setPromo(res);
    };

    useEffect(() => {
        handleLoadPromoData();
    }, []);

    return (
        <div className="pb-20">
            <div className="container mx-auto w-full pt-20 lg:px-1 px-5 ">
                <Profile userData={userData} />

                <PromoCarausel
                    data={promo}
                    height={"h-32"}
                    show={4}
                    length={promo?.length}
                />
            </div>
            <ActivitySection />
        </div>
    );
}
