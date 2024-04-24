import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
export default function ActionButtons({
    handleShowModal,
    handleDelete,
    handleEdit,
}) {
    return (
        <>
            <div className="flex flex-row  gap-x-3">
                <button
                    className="bg-blue-600 text-sm text-white p-2 rounded-2xl"
                    onClick={handleShowModal}
                >
                    <RiEyeFill />
                </button>
                <button
                    onClick={handleEdit}
                    className="bg-green-600 text-sm text-white p-2 rounded-2xl"
                >
                    <MdEditSquare />
                </button>
                <button
                    className="bg-red-700 text-sm text-white p-2 rounded-2xl"
                    onClick={handleDelete}
                >
                    <FaTrashAlt />
                </button>
            </div>
        </>
    );
}
