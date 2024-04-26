import Link from "next/link";
import ChangeRole from "../../utils/ChangeRole";
export default function ShortTableUser({ data }) {
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
    ];

    if (tableTitle.length !== 0) {
        tableTitle.push("action");
    }
    return (
        <div className="w-full overflow-x-auto">
            <h1 className="text-2xl font-bold mb-3">Kelola User</h1>
            <table className="table table-compact w-full ">
                <thead>
                    <tr className="lg:text-md text-md">
                        {tableTitle?.map((item) => {
                            if (item === "id") {
                                return (
                                    <th key={item} className="text-left">
                                        no
                                    </th>
                                );
                            } else if (
                                item === "profilePictureUrl" ||
                                item === "no"
                            ) {
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
                <tbody className="lg:text-md text-md divide-y divide-slate-200">
                    {data?.map((item, index) => {
                        return (
                            <tr key={index} className="">
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
                                                className="flex flex-row gap-2 items-center py-1"
                                                key={item[head]}
                                            >
                                                <img
                                                    className="table-avatar lg:w-10  w-8 rounded-full lg:h-10 h-8"
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
                                                <div className=" flex  justify-center content-start">
                                                    <ChangeRole
                                                        userData={item}
                                                    />
                                                </div>
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
            <div className="mt-6">
                <Link
                    href="dashboard/all-user"
                    className="text-blue-400 font-medium underline"
                >
                    show more
                </Link>
            </div>
        </div>
    );
}
