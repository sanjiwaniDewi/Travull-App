"use client";
import AllUser from "@/components/dashboard/user/AllUser";
import DetailModal from "@/components/utils/DetailModal";
import { useSelector } from "react-redux";

export default function AllUserPage() {
    const { showModal } = useSelector((state) => state.modal);
    return (
        <div className="w-full lg:pt-16 pt-28">
            <AllUser />
            {showModal && <DetailModal />}
        </div>
    );
}
