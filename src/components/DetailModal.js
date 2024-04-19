"use client";
import Modal from "./Modal";
import DetailBanner from "./DetailBanner";
import Card from "./Card";
import CloseBtnModal from "./CLoseBtnModal";
import { useSelector } from "react-redux";
import DetailPromo from "./DetailPromo";
import DetailCategory from "./DetailCategory";

export default function DetailModal() {
    const { type } = useSelector((state) => state.modal);
    console.log(type);
    return (
        <Modal>
            <CloseBtnModal />
            {type === "banner" && <DetailBanner />}
            {type === "promo" && <DetailPromo />}
            {type === "category" && <DetailCategory />}
            {/* {type === "activity" && <Card />} */}
        </Modal>
    );
}
