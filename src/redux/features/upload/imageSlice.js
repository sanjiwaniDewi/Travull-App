import { API_KEY, BASE_API } from "@/API/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    imageUrl: null,
    imageUrls: [],
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
            // console.log(res);

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
            state.imageUrl = action.payload !== null ? action.payload : "";
        },

        setImagesUrls(state, action) {
            if (state.imageUrls.length > 0) {
                state.imageUrls = [...state.imageUrls, action.payload];
            } else if (state.imageUrls.includes(action.payload)) {
                return;
            } else if (Array.isArray(action.payload)) {
                state.imageUrls = action.payload;
            } else {
                state.imageUrls = [action.payload];
            }
        },
        deleteImageUrl(state) {
            state.imageUrl = null;
            state.imageUrls = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImage.fulfilled, (state, action) => {});
    },
});

export const { getImageUrl, deleteImageUrl, setImagesUrls } =
    imageSlice.actions;

export default imageSlice.reducer;
