import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCreate: false,
    isDelete: false,
    isUpdate: false,
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
    },
});

export const { changeEditStatus, changeCreateSatus, changeDeleteSatus } =
    statusSlice.actions;
export default statusSlice.reducer;
