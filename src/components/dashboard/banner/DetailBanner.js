"use client";
import { useSelector } from "react-redux";

export default function DetailBanner() {
    const { modalData } = useSelector((state) => state.modal);
    return (
        <>
            <div>
                <img
                    src={modalData.imageUrl}
                    className="w-96 object-cover rounded-xl"
                    alt="banner image"
                />
                <form className="flex flex-col w-96">
                    <input
                        defaultValue={modalData.name}
                        name="name"
                        type="text"
                        className="text-black text-3xl font-bold   mt-1 px-0 py-4 rounded-xl focus:outline-none"
                        disabled
                    />
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col">
                            <label className="font-bold text-sm ">
                                Created At
                            </label>
                            <input
                                defaultValue={modalData.createdAt}
                                type="text"
                                className="text-black text-sm  mt-1 px-2 py-2 rounded-xl focus:outline-none"
                                disabled
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-sm ">
                                Updated At
                            </label>
                            <input
                                defaultValue={modalData.updatedAt}
                                type="text"
                                className="text-black text-sm  mt-1 px-2 py-2 rounded-xl focus:outline-none"
                                disabled
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
