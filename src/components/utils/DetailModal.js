"use client";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import DetailBanner from "../dashboard/banner/DetailBanner";
import CloseBtnModal from "./CLoseBtnModal";
import DetailPromo from "../dashboard/promo/DetailPromo";
import DetailCategory from "../dashboard/category/DetailCategory";
import DetailActivity from "../dashboard/activity/DetailActivity";
import RoleModal from "../dashboard/user/RoleModal";
import LogoutDetail from "../layout/LogoutDetail";
import DeleteModal from "./DeleteModal";

export default function DetailModal() {
    const { type } = useSelector((state) => state.modal);
    return (
        <Modal>
            <CloseBtnModal />
            {type === "banner" && <DetailBanner />}
            {type === "promo" && <DetailPromo />}
            {type === "category" && <DetailCategory />}
            {type === "activity" && <DetailActivity />}
            {type === "changeRole" && <RoleModal />}
            {type === "logout" && <LogoutDetail />}
            {type === "delete" && <DeleteModal />}
            {!type && (
                <div className="min-h-80 w-96">
                    <div className="min-h-80 w-full bg-slate-100 flex justify-center items-center content-center self-center">
                        <p>Loading ...</p>
                    </div>
                </div>
            )}
        </Modal>
    );
}
