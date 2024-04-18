export default function AddButton({ handleAddItem }) {
    return (
        <button
            className="bg-slate-500 text-sm text-white py-2 px-4 rounded-2xl"
            onClick={handleAddItem}
        >
            Add
        </button>
    );
}
