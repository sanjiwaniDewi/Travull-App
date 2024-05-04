import { MdAdd } from "react-icons/md";
export default function AddButton({ handleAddItem, type, isMultipleImage }) {
    return (
        <button
            className=" text-sm  flex justify-center  py-2 px-2 rounded-xl font-semibold bg-primary-200 text-secondary-200 hover:text-primary-200 hover:bg-secondary-200 hover:scale-105 disabled:bg-secondary-200 disabled:text-white disabled:cursor-not-allowed"
            onClick={handleAddItem}
            disabled={isMultipleImage}
        >
            <span className="self-center text-lg">
                <MdAdd />
            </span>
            Tambah {type}
        </button>
    );
}
