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
        <div className="container mx-auto bg-slate-50 border-gray-200">
            <h1 className="text-2xl font-bold mb-3">Kelola User</h1>
            <div className=" overflow-x-auto table-auto">
                <table className="table text-md w-full  table-compact ">
                    <thead>
                        <tr className="lg:text-md text-md bg-primary-200 text-secondary-200">
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
                                } else if (
                                    item === "profilePictureUrl" ||
                                    item === "no"
                                ) {
                                    return;
                                } else if (item === "action") {
                                    return (
                                        <th key={item} className="py-2">
                                            {item}
                                        </th>
                                    );
                                } else {
                                    return (
                                        <th
                                            key={item}
                                            className="text-left py-2"
                                        >
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
                                                <td
                                                    key={item["no"]}
                                                    className="ps-4 pt-3"
                                                >
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
                                                    className="flex flex-row gap-2 items-center pt-3 "
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
                                                    <div className=" flex  justify-center content-start pt-3">
                                                        <ChangeRole
                                                            userData={item}
                                                        />
                                                    </div>
                                                </td>
                                            );
                                        }
                                        return (
                                            <td
                                                key={item[head] + item["id"]}
                                                className="pt-3"
                                            >
                                                {item[head]}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-6">
                <Link
                    href="dashboard/all-user"
                    className="text-primary font-medium underline"
                >
                    show more
                </Link>
            </div>
        </div>
    );
}
