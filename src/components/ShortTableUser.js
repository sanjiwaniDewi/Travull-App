import Link from "next/link";
import ChangeRole from "./ChangeRole";
export default function ShortTableUser({ data }) {
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
    ];

    if (tableTitle.length !== 0) {
        tableTitle.push("action");
    }
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-3">Kelola User</h1>
            <table className="table table-compact w-full text-left">
                <thead>
                    <tr>
                        {tableTitle?.map((item) => {
                            if (item === "id") {
                                return <th>No</th>;
                            } else if (
                                item === "profilePictureUrl" ||
                                item === "no"
                            ) {
                                return;
                            } else {
                                return <th>{item}</th>;
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        return (
                            <tr>
                                {tableTitle.map((head, indexs) => {
                                    if (head === "id") {
                                        return <td>{item["no"]}</td>;
                                    } else if (
                                        head === "profilePictureUrl" ||
                                        head === "no"
                                    ) {
                                        return;
                                    } else if (indexs === 1) {
                                        return (
                                            <div className="flex flex-row gap-2">
                                                <img
                                                    className="table-avatar w-10 rounded-full h-10"
                                                    src={
                                                        item[
                                                            "profilePictureUrl"
                                                        ]
                                                    }
                                                    alt="profilePictureUrl"
                                                />
                                                {item[head]}
                                            </div>
                                        );
                                    } else if (head === "action") {
                                        return <ChangeRole userData={item} />;
                                    }
                                    return <td>{item[head]}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mt-2 mb-4">
                <Link href="dashboard/all-user" className="text-black">
                    show more
                </Link>
            </div>
        </div>
    );
}
