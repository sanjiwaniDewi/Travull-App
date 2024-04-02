"use client";
import { API_KEY, BASE_API } from "@/API/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    profilePictureUrl: "",
    phoneNumber: "",
    bio: "",
    website: "",
};

export const login = createAsyncThunk(
    "auth/login",
    async (payload, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.post(
                `${BASE_API}/login`,
                {
                    email: payload.email,
                    password: payload.password,
                },
                {
                    headers: { apiKey: API_KEY },
                }
            );
            const token = res.data.token;
            localStorage.setItem("access_token", token);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createUser: {
            prepare(name, username) {
                return {
                    payload: { name, username },
                };
            },
            reducer(state, action) {
                state.name = action.payload.name;
                state.username = action.payload.username;
            },
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {});
    },
});

export const { createUser } = authSlice.actions;

export default authSlice.reducer;
