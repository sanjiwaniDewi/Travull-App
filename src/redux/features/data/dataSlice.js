import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        additem: (state, action) => {
            if (state.data.length === 0) {
                state.data = [action.payload];
            } else {
                state.data = [...state.data, action.payload];
            }
        },
        updateItem: (state, action) => {
            const prevData = state.data.filter(
                (item) => item.id !== action.payload.id
            );
            state.data = [...prevData, action.payload];
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { setData, addItem, updateItem, deleteItem } = dataSlice.actions;

export default dataSlice.reducer;
