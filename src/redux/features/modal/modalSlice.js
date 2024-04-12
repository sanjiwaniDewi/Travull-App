import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    modalData: {},
    type: "",
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeModalStatus: (state) => {
            state.showModal = !state.showModal;
        },

        setModalData: (state, action) => {
            state.modalData = action.payload;
        },

        clearModalData: (state) => {
            state.modalData = {};
        },
        setModalType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { changeModalStatus, setModalData, clearModalData, setModalType } =
    modalSlice.actions;
export default modalSlice.reducer;
