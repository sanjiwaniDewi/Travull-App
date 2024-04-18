import ChangeRole from "./ChangeRole";

export default function TableUser({ data }) {
    const tableTitle = [
        ...new Set(data?.map((item) => Object.keys(item)).flat()),
    ];

    if (tableTitle.length !== 0) {
        tableTitle.push("action");
    }

    return (
        <table>
            <thead>
                <tr>
                    {tableTitle?.map((item) => {
                        if (item === "id") {
                            return <th>No</th>;
                        } else if (item === "profilePictureUrl") {
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
                                    return <td>{index + 1}</td>;
                                } else if (head === "profilePictureUrl") {
                                    return;
                                } else if (indexs === 1) {
                                    return (
                                        <div className="flex flex-row gap-2">
                                            <img
                                                className="table-avatar w-10 rounded-full h-10"
                                                src={item["profilePictureUrl"]}
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
            <tfoot></tfoot>
        </table>
    );
}
