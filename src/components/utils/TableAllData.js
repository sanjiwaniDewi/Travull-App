"use client";

import ActionButtons from "./ActionButton";
import Link from "next/link";
import DetailModal from "./DetailModal";
import { BASE_API, API_KEY } from "@/API/api";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setModalData, setModalType } from "@/redux/features/modal/modalSlice";
import AddButton from "./AddButton";
import { useRouter } from "next/navigation";
import { handleCreateRoute } from "@/utils/handleActionButton";

import {
    changeEditStatus,
    changeDeleteSatus,
    changeCreateSatus,
} from "@/redux/features/status/statusSilce";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import {
    handleDeleteItem,
    handleUpdateRoute,
} from "@/utils/handleActionButton";
import { formatDate } from "@/utils/handleFormatData";
import { deleteItem } from "@/redux/features/data/dataSlice";

export default function TabelAllData({ data, title, type }) {
    const dispatch = useDispatch();
    const { showModal } = useSelector((state) => state.modal);
    console.log("ini", data);
    const tableTitle = [
        ...new Set(data?.map((item) => Object?.keys(item)).flat()),
    ];

    const router = useRouter();

    if (tableTitle.length !== 0) {
        tableTitle.push("action");
    }

    const handlerShowDetail = async (id, type) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const res = await axios.get(`${BASE_API}/${type}/${id}`, {
                headers: {
                    apiKey: API_KEY,
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(setModalData(res.data.data));
            dispatch(setModalType(type));
        }
    };

    const handleAddItem = () => {
        dispatch(changeCreateSatus());
        router.push(handleCreateRoute(type));
    };

    const handleShowModal = (id, type) => {
        dispatch(changeModalStatus());
        handlerShowDetail(id, type);
    };
    const handleDelete = (id, type) => {
        // handleDeleteItem(id, type);

        dispatch(changeModalStatus());
        dispatch(setModalType("delete"));
        dispatch(setModalData({ id, type }));

        // dispatch(deleteItem(id));
        // dispatch(changeDeleteSatus());
    };

    const handleEdit = (id, type) => {
        dispatch(changeEditStatus());
        router.push(handleUpdateRoute(id, type));
    };

    return (
        <div className="container mx-auto w-full p-6 bg-white border shadow-md border-gray-200 rounded-lg">
            <div className="flex justify-start content-center pt-1 gap-4 mb-3">
                <h1 className="text-2xl font-bold ">{title}</h1>
                <div className="flex self-center">
                    <AddButton handleAddItem={handleAddItem} type={type} />
                </div>
            </div>
            <table className="table text-lg table-compact w-full overflow-x-auto">
                <thead>
                    <tr className="text-md">
                        {tableTitle?.map((item) => {
                            if (item === "id") {
                                return (
                                    <th key={item} className="text-left">
                                        no
                                    </th>
                                );
                            } else if (item === "no") {
                                return;
                            } else if (
                                item === "updatedAt" ||
                                item === "createdAt" ||
                                item === "title" ||
                                item === "name"
                            ) {
                                return (
                                    <th key={item} className="text-left">
                                        {item}
                                    </th>
                                );
                            } else if (item === "action") {
                                return <th key={`${item}`}>{item}</th>;
                            }

                            return;
                        })}
                    </tr>
                </thead>
                <tbody className=" divide-y divide-slate-200">
                    {data.map((row, index) => (
                        <tr key={row.id} className=" text-md">
                            {tableTitle.map((head, indexs) => {
                                if (head === "id") {
                                    return <td key={index}>{index + 1}</td>;
                                } else if (head === "no") {
                                    return;
                                } else if (head === "action") {
                                    return (
                                        <td key={row["id"]} className="py-2">
                                            <div className=" flex  justify-center content-start">
                                                <ActionButtons
                                                    // id={row["id"]}
                                                    // type={type}
                                                    handleShowModal={() =>
                                                        handleShowModal(
                                                            row["id"],
                                                            type
                                                        )
                                                    }
                                                    handleDelete={() =>
                                                        handleDelete(
                                                            row["id"],
                                                            type
                                                        )
                                                    }
                                                    handleEdit={() =>
                                                        handleEdit(
                                                            row["id"],
                                                            type
                                                        )
                                                    }
                                                />
                                            </div>
                                        </td>
                                    );
                                } else if (head === "updatedAt") {
                                    return (
                                        <td key={`${row[head]}updt`}>
                                            {formatDate(row[head])}
                                        </td>
                                    );
                                } else if (head === "createdAt") {
                                    return (
                                        <td key={`${row[head]}crt`}>
                                            {formatDate(row[head])}
                                        </td>
                                    );
                                } else if (
                                    head === "name" ||
                                    head === "title"
                                ) {
                                    return (
                                        <td key={`${row[head]}`}>
                                            {row[head]}
                                        </td>
                                    );
                                }
                                return;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <DetailModal />}
        </div>
    );
}
