import { useState } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

export default function Pagination({ totalPages, handleCurrentPage }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handleFirstPage = () => {
        setCurrentPage(1);
        handleCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
        handleCurrentPage(totalPages);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            handleCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            handleCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex gap-2 pe-12 mt-12 w-full justify-end text-xs font-bold">
            <button
                className="text-lg"
                disabled={currentPage === 1}
                onClick={handleFirstPage}
            >
                <TbPlayerTrackPrevFilled />
            </button>
            <button
                className="outline outline-1 outline-slate-400 px-2 py-1 rounded-sm"
                disabled={currentPage === 1}
                onClick={handlePrevPage}
            >
                PREV
            </button>
            <button
                className="outline outline-1 outline-slate-400 px-2 py-1 rounded-sm"
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
            >
                NEXT
            </button>
            <button
                className="text-lg"
                disabled={currentPage === totalPages}
                onClick={handleLastPage}
            >
                <TbPlayerTrackNextFilled />
            </button>
        </div>
    );
}
