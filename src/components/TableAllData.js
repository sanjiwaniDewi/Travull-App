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
} from "@/redux/features/status/statusSilce";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import {
    handleDeleteItem,
    handleUpdateRoute,
} from "@/utils/handleActionButton";

export default function TabelAllData({ data, title, type }) {
    const dispatch = useDispatch();
    const { showModal } = useSelector((state) => state.modal);
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
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
        router.push(handleCreateRoute(type));
    };

    //  const dispatch = useDispatch();
    //  const router = useRouter();

    const handleShowModal = (id, type) => {
        dispatch(changeModalStatus());
        handlerShowDetail(id, type);
    };
    const handleDelete = (id, type) => {
        handleDeleteItem(id, type);
        dispatch(changeDeleteSatus());
    };

    const handleEdit = (id, type) => {
        dispatch(changeEditStatus());
        router.push(handleUpdateRoute(id, type));
    };

    return (
        <div className="overflow-x-auto">
            <div>
                <h1 className="text-2xl font-bold mb-3">{title}</h1>
                <AddButton handleAddItem={handleAddItem} />
            </div>
            <table className="table table-compact w-full">
                <thead className="text-left">
                    <tr>
                        {tableTitle?.map((item) => {
                            if (item === "id") {
                                return <th key={item}>No</th>;
                            } else if (item === "no") {
                                return;
                            } else if (
                                item === "updatedAt" ||
                                item === "createdAt" ||
                                item === "title" ||
                                item === "name" ||
                                item === "action"
                            ) {
                                return <th key={`${item}`}>{item}</th>;
                            }

                            return;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            {tableTitle.map((head, indexs) => {
                                if (head === "id") {
                                    return <td key={row["no"]}>{row["no"]}</td>;
                                } else if (head === "no") {
                                    return;
                                } else if (head === "action") {
                                    return (
                                        <td key={row["id"]}>
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
                                                    handleEdit(row["id"], type)
                                                }
                                            />
                                        </td>
                                    );
                                } else if (head === "updatedAt") {
                                    return (
                                        <td key={`${row[head]}updt`}>
                                            {row[head]}
                                        </td>
                                    );
                                } else if (head === "createdAt") {
                                    return (
                                        <td key={`${row[head]}crt`}>
                                            {row[head]}
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
