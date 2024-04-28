"use client";
import { useDispatch, useSelector } from "react-redux";
import {
    changeModalStatus,
    clearModalData,
    setModalType,
} from "@/redux/features/modal/modalSlice";
import { handleDeleteItem } from "@/utils/handleActionButton";
import { changeDeleteSatus } from "@/redux/features/status/statusSilce";
import { deleteItem } from "@/redux/features/data/dataSlice";
import useDelete from "@/hooks/useDelete";
import { TiWarningOutline } from "react-icons/ti";

export default function DeleteModal() {
    const { modalData } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const {
        deleteBannerId,
        deletePromoId,
        deleteCategoryId,
        deleteActivityId,
    } = useDelete();

    const handleDeleteItem = (id, type) => {
        switch (type) {
            case "banner":
                return deleteBannerId(id);
            case "promo":
                return deletePromoId(id);
            case "category":
                return deleteCategoryId(id);
            case "activity":
                return deleteActivityId(id);
            default:
                return;
        }
    };

    const handleDelete = () => {
        handleDeleteItem(modalData.id, modalData.type);
        dispatch(deleteItem(modalData.id));
        dispatch(changeDeleteSatus());
        dispatch(changeModalStatus());
        dispatch(clearModalData());
        dispatch(setModalType(""));
    };

    const handleCloseModal = () => {
        dispatch(changeModalStatus());
        dispatch(clearModalData());
        dispatch(setModalType(""));
    };
    return (
        <div className="text-center p-2 ">
            <h1 className="text-3xl font-bold mb-4">Delete</h1>
            <div className="text-5xl notifIcons w-full flex items-center justify-center text-orange-600 py-2">
                <TiWarningOutline />
            </div>
            <p className="mb-8">Apakah anda nyakin ingin menghapus Data?</p>

            <div className="w-full flex justify-between ">
                <button
                    className="px-4 py-2 bg-primary-200 text-secondary-200 hover:bg-secondary-200 hover:text-primary-200 rounded-xl font-lg  font-semibold "
                    onClick={handleCloseModal}
                >
                    Tidak
                </button>
                <button
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleDelete}
                >
                    Hapus
                </button>
            </div>
        </div>
    );
}
