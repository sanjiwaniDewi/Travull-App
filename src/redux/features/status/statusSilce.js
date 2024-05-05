import { createSlice } from "@reduxjs/toolkit";
import { setErrMessage } from "../auth/authSlice";

const initialState = {
    isCreate: false,
    isDelete: false,
    isUpdate: false,
    errorMessage: [],
};

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changeEditStatus: (state) => {
            state.isUpdate = !state.isUpdate;
        },
        changeDeleteSatus: (state) => {
            state.isDelete = !state.isDelete;
        },
        changeCreateSatus: (state) => {
            state.isCreate = !state.isCreate;
        },
        setErrMessage(state, action) {
            if (state.errorMessage) {
                state.errorMessage = [...state.errorMessage, action.payload];
            } else {
                state.errorMessage = [action.payload];
            }
        },
        deleteErrorMessage(state) {
            state.errorMessage = [];
        },
    },
});

export const { changeEditStatus, changeCreateSatus, changeDeleteSatus } =
    statusSlice.actions;
export default statusSlice.reducer;
