"use client";

import { BASE_API, API_KEY } from "@/API/api";
import { useSelector, useDispatch } from "react-redux";
import { setModalData, setModalType } from "@/redux/features/modal/modalSlice";
import { useRouter } from "next/navigation";
import { handleCreateRoute } from "@/utils/handleActionButton";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import { handleUpdateRoute } from "@/utils/handleActionButton";
import { formatDate } from "@/utils/handleFormatData";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";

import axios from "axios";
import ActionButtons from "./ActionButton";
import DetailModal from "./DetailModal";
import AddButton from "./AddButton";

export default function TabelAllData({ data, title, type }) {
    const dispatch = useDispatch();
    const { showModal } = useSelector((state) => state.modal);

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
        dispatch(deleteImageUrl());
        router.push(handleCreateRoute(type));
    };

    const handleShowModal = (id, type) => {
        dispatch(changeModalStatus());
        handlerShowDetail(id, type);
    };
    const handleDelete = (id, type) => {
        dispatch(changeModalStatus());
        dispatch(setModalType("delete"));
        dispatch(setModalData({ id, type }));
    };

    const handleEdit = (id, type) => {
        dispatch(deleteImageUrl());

        router.push(handleUpdateRoute(id, type));
    };

    return (
        <div className="container w-full p-6 bg-slate-50 border shadow-md border-gray-200 rounded-lg">
            <div className="flex justify-start content-center pt-1 gap-4 mb-3">
                <h1 className="text-2xl font-bold ">{title}</h1>
                <div className="flex self-center">
                    <AddButton
                        handleAddItem={handleAddItem}
                        type={type}
                        isMultipleImage={false}
                    />
                </div>
            </div>
            <div className="overflow-x-auto table-auto">
                <table className="table text-lg w-full">
                    <thead className="shadow-xl">
                        <tr className="text-md shadow-md  bg-primary-200 text-secondary-200">
                            {tableTitle?.map((item) => {
                                if (item === "id") {
                                    return (
                                        <th
                                            key={item}
                                            className="text-left py-2 ps-4"
                                        >
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
                                        <th
                                            key={item}
                                            className="text-left py-2"
                                        >
                                            {item}
                                        </th>
                                    );
                                } else if (item === "action") {
                                    return (
                                        <th key={`${item}`} className="py-2">
                                            {item}
                                        </th>
                                    );
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
                                        return (
                                            <td
                                                key={index}
                                                className="ps-4 pt-3"
                                            >
                                                {index + 1}
                                            </td>
                                        );
                                    } else if (head === "no") {
                                        return;
                                    } else if (head === "action") {
                                        return (
                                            <td
                                                key={row["id"]}
                                                className="pt-3"
                                            >
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
                                            <td
                                                key={`${row[head]}updt`}
                                                className="pt-3"
                                            >
                                                {formatDate(row[head])}
                                            </td>
                                        );
                                    } else if (head === "createdAt") {
                                        return (
                                            <td
                                                key={`${row[head]}crt`}
                                                className="pt-3"
                                            >
                                                {formatDate(row[head])}
                                            </td>
                                        );
                                    } else if (
                                        head === "name" ||
                                        head === "title"
                                    ) {
                                        return (
                                            <td
                                                key={`${row[head]}`}
                                                className="pt-3"
                                            >
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
            </div>

            {showModal && <DetailModal />}
        </div>
    );
}
