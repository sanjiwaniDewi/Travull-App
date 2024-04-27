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

export default function DeleteModal() {
    const { modalData } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

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
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold mb-8">Logout</h1>
            <p className="mb-12">Apakah anda nyakin ingin menghapus Data?</p>

            <div className="w-full flex justify-between ">
                <button
                    className="px-4 py-2 bg-slate-500 hover:bg-slate-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleCloseModal}
                >
                    Tidak
                </button>
                <button
                    className="px-4 py-2 bg-orange-400 hover:bg-orange-200 hover:text-black rounded-xl font-lg text-slate-200 font-semibold "
                    onClick={handleDelete}
                >
                    Hapus
                </button>
            </div>
        </div>
    );
}
