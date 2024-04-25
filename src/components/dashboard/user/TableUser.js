import ChangeRole from "../../utils/ChangeRole";
import Image from "next/image";

export default function TableUser({ data }) {
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
    ];

    if (tableTitle.length !== 0) {
        tableTitle.push("action");
    }

    return (
        <table className="w-full overflow-x-visible table table-compact">
            <thead>
                <tr>
                    {tableTitle?.map((item) => {
                        if (item === "id") {
                            return (
                                <th key={item} className="text-left">
                                    no
                                </th>
                            );
                        } else if (item === "profilePictureUrl") {
                            return;
                        } else if (item === "action") {
                            return <th key={item}>{item}</th>;
                        } else {
                            return (
                                <th key={item} className="text-left">
                                    {item}
                                </th>
                            );
                        }
                    })}
                </tr>
            </thead>
            <tbody className=" divide-y divide-slate-200">
                {data?.map((item, index) => {
                    return (
                        <tr>
                            {tableTitle.map((head, indexs) => {
                                if (head === "id") {
                                    return <td>{index + 1}</td>;
                                } else if (head === "profilePictureUrl") {
                                    return;
                                } else if (indexs === 1) {
                                    return (
                                        <div className="flex flex-row gap-2 items-center py-1">
                                            <img
                                                className="table-avatar lg:w-10  w-8 rounded-full lg:h-10 h-8"
                                                src={
                                                    item[
                                                        "profilePictureUrl"
                                                    ]?.includes("http")
                                                        ? item[
                                                              "profilePictureUrl"
                                                          ]
                                                        : "/Avatar-Image.png"
                                                }
                                                alt="profilePictureUrl"
                                            />
                                            {item[head]}
                                        </div>
                                    );
                                } else if (head === "action") {
                                    return (
                                        <td key={item["id"]}>
                                            <div className=" flex  justify-center content-start">
                                                <ChangeRole userData={item} />
                                            </div>
                                        </td>
                                    );
                                }
                                return <td>{item[head]}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
            <tfoot></tfoot>
        </table>
    );
}