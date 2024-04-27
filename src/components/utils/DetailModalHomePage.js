"use client";
import { useSelector } from "react-redux";
import LogoutDetail from "../layout/LogoutDetail";
import Modal from "./Modal";

export default function DetailModalHomePage() {
    const { type } = useSelector((state) => state.modal);

    return <Modal>{type === "logout" && <LogoutDetail />}</Modal>;
}
