"use client";

import Link from "next/link";
import AddButton from "./AddButton";
import { useRouter } from "next/navigation";
import { handleCreateRoute } from "@/utils/handleActionButton";
import { formatDate } from "@/utils/handleFormatData";

export default function ShortTable({ data, title, detileLink, type }) {
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
    ];

    const router = useRouter();

    const handleAddItem = () => {
        router.push(handleCreateRoute(type));
    };

    return (
        <div className="w-full p-6  border shadow-md border-gray-200 rounded-lg overflow-x-auto">
            <div className="">
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
                <div className=" overflow-x-auto table-auto">
                    <table className="table table-compact w-full">
                        <thead className=" pb-2 px-2  shadow-xl ">
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
                                            <th
                                                key={`${item}`}
                                                className="py-2"
                                            >
                                                {item}
                                            </th>
                                        );
                                    }
                                    return;
                                })}
                            </tr>
                        </thead>
                        <tbody className=" text-md divide-y divide-slate-200">
                            {data.map((row) => (
                                <tr key={row.id}>
                                    {tableTitle.map((head, indexs) => {
                                        if (head === "id") {
                                            return (
                                                <td
                                                    key={row["no"]}
                                                    className="ps-4 pt-3"
                                                >
                                                    {row["no"]}
                                                </td>
                                            );
                                        } else if (head === "no") {
                                            return;
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

                <div className="mt-6">
                    <Link
                        href={detileLink}
                        className="text-primary-200 font-medium underline"
                    >
                        Semua Tabel
                    </Link>
                </div>
            </div>
        </div>
    );
}
