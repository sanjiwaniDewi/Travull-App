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
                                return <th key={item}>No</th>;
                            } else if (
                                item === "profilePictureUrl" ||
                                item === "no"
                            ) {
                                return;
                            } else {
                                return <th key={item}>{item}</th>;
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        return (
                            <tr key={index}>
                                {tableTitle.map((head, indexs) => {
                                    if (head === "id") {
                                        return (
                                            <td key={item["no"]}>
                                                {item["no"]}
                                            </td>
                                        );
                                    } else if (
                                        head === "profilePictureUrl" ||
                                        head === "no"
                                    ) {
                                        return;
                                    } else if (indexs === 1) {
                                        return (
                                            <td
                                                className="flex flex-row gap-2"
                                                key={item[head]}
                                            >
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
                                            </td>
                                        );
                                    } else if (head === "action") {
                                        return (
                                            <td key={item["id"]}>
                                                <ChangeRole userData={item} />
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={item[head]}>{item[head]}</td>
                                    );
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
