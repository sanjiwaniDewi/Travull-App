import { MdAdd } from "react-icons/md";
export default function AddButton({ handleAddItem, type }) {
    return (
        <button
            className=" text-sm outline flex justify-center  py-2 px-2 rounded-xl outline-1 outline-slate-300 "
            onClick={handleAddItem}
        >
            <span className="self-center text-lg">
                <MdAdd />
            </span>
            Add {type}
        </button>
    );
}
