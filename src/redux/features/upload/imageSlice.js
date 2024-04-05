import { API_KEY, BASE_API } from "@/API/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    imageUrl: "",
};

export const uploadImage = createAsyncThunk(
    "image/uploadImage",
    async (payload, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.post(`${BASE_API}/upload-image`, payload, {
                headers: {
                    apiKey: API_KEY,
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            });

            const imageUrl = res?.data?.url;
            console.log(res);
            console.log(imageUrl);

            return thunkAPI.dispatch({
                type: "image/getImageUrl",
                payload: imageUrl,
            });
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        getImageUrl(state, action) {
            state.imageUrl = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImage.fulfilled, (state, action) => {});
    },
});

export const { getImageUrl } = imageSlice.actions;

export default imageSlice.reducer;
