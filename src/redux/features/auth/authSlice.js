"use client";
import { API_KEY, BASE_API } from "@/API/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";
const initialState = {
    isLogin: false,
    isLoading: false,
    errMessage: "",
    isRegister: false,
    isSuccessLogin: false,
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
            const token = res?.data?.token;
            localStorage.setItem("access_token", token);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (payload, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.post(`${BASE_API}/register`, payload, {
                headers: { apiKey: API_KEY },
            });
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const token = localStorage.getItem("access_token");

            await axios.get(`${BASE_API}/logout`, {
                headers: { apiKey: API_KEY, Authorization: `Bearer ${token}` },
            });
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStatus(state, action) {
            state.isLogin = action.payload;
        },
        successLoginStatus(state, action) {
            state.isSuccessLogin = action.payload;
        },
        setErrMessage(state, action) {
            state.errMessage = action.payload;
        },
        registerStatus(state, action) {
            state.isRegister = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccessLogin = true;
            state.errMessage = "";
        });
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.errMessage = action.payload.response.data.errors
                ? action.payload.response.data.errors.map(
                      (item) => item.message
                  )
                : action.payload.response.data?.message;
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isRegister = true;
            state.errMessage = "";
        });
        builder.addCase(register.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.errMessage = action.payload.response.data.errors
                ? action.payload.response.data.errors.map(
                      (item) => item.message
                  )
                : action.payload.response.data?.message;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("role");
            state.isLogin = false;
        });
    },
});

export const {
    loginStatus,
    setErrMessage,
    registerStatus,
    successLoginStatus,
} = authSlice.actions;

export default authSlice.reducer;
