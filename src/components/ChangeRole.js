import { useState } from "react";
import RoleModal from "./RoleModal";

export default function ChangeRole({ userData }) {
    const [showModal, SetShowModal] = useState(false);
    function handleShowModal() {
        SetShowModal(!showModal);
    }

    return (
        <div>
            <button
                onClick={handleShowModal}
                className="block px-4 py-1 text-sm bg-slate-600 rounded-lg font-medium hover:bg-slate-300 hover:text-slate-800"
            >
                Change Role
            </button>

            {showModal && (
                <RoleModal
                    showModal={showModal}
                    handleShowModal={handleShowModal}
                    userData={userData}
                />
            )}
        </div>
    );
}
