"use client";
import Modal from "./Modal";
import DetailBanner from "../dashboard/banner/DetailBanner";
import Card from "../layout/Card";
import CloseBtnModal from "./CLoseBtnModal";
import { useSelector } from "react-redux";
import DetailPromo from "../dashboard/promo/DetailPromo";
import DetailCategory from "../dashboard/category/DetailCategory";
import DetailActivity from "../dashboard/activity/DetailActivity";

export default function DetailModal() {
    const { type } = useSelector((state) => state.modal);
    console.log(type);
    return (
        <Modal>
            <CloseBtnModal />
            {type === "banner" && <DetailBanner />}
            {type === "promo" && <DetailPromo />}
            {type === "category" && <DetailCategory />}
            {type === "activity" && <DetailActivity />}
        </Modal>
    );
}
