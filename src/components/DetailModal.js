"use client";
import Modal from "./Modal";
import DetailBanner from "./DetailBanner";
import Card from "./Card";
import CloseBtnModal from "./CLoseBtnModal";
import { useSelector } from "react-redux";

export default function DetailModal() {
    const { type } = useSelector((state) => state.modal);
    console.log(type);
    return (
        <Modal>
            <CloseBtnModal />
            {type === "banner" && <DetailBanner />}
        </Modal>
    );
}
