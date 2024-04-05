import { API_KEY, BASE_API } from "@/API/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    id: "",
    name: "",
    email: "",
    role: "",
    profilePictureUrl: "",
    phoneNumber: "",
};

export const fatchUserLogged = createAsyncThunk(
    "user/fatchUserLogged",
    async (payload, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        try {
            const token = localStorage.getItem("access_token");

            if (token) {
                const res = await axios.get(`${BASE_API}/user`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });

                return dispatch({
                    type: "user/getLoggedUser",
                    payload: res.data.data,
                });
            }
        } catch (err) {}
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (payload, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        try {
            const token = localStorage.getItem("access_token");

            if (token) {
                const res = await axios.post(
                    `${BASE_API}/update-profile`,
                    payload,
                    {
                        headers: {
                            apiKey: API_KEY,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                return dispatch({
                    type: "user/getLoggedUser",
                    payload: res.data.data,
                });
            }
        } catch (err) {}
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getLoggedUser(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.profilePictureUrl = action.payload.profilePictureUrl;
            state.phoneNumber = action.payload.phoneNumber;
        },
        updateUserRole(state, action) {
            state.role = action.payload;
        },
    },
});

export const { getLoggedUser, updateUserRole } = userSlice.actions;
export default userSlice.reducer;
