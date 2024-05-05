"use client";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import Card from "@/components/layout/Card";
import Layout from "@/components/layout/Layout";
import Profile from "@/components/profile/Profile";
import { useGetAllData } from "@/hooks/useGet";
import { fatchUserLogged } from "@/redux/features/user/userSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PromoCarausel from "@/components/homepage/promo/PromoCarousel";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);
    const [promo, setPromo] = useState([]);
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
