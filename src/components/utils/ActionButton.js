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
                    className="bg-secondary-200 text-sm text-primary-200 p-2 rounded-2xl hover:scale-110"
                    onClick={handleShowModal}
                >
                    <RiEyeFill />
                </button>
                <button
                    onClick={handleEdit}
                    className="bg-secondary-100 text-sm text-primary-200 p-2 rounded-2xl hover:scale-110"
                >
                    <MdEditSquare />
                </button>
                <button
                    className="bg-primary-200 text-sm text-white p-2 rounded-2xl hover:scale-110"
                    onClick={handleDelete}
                >
                    <FaTrashAlt />
                </button>
            </div>
        </>
    );
}
