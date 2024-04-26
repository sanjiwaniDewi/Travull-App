import { API_KEY, BASE_API } from "@/API/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    id: "",
    name: "",
    role: "",
    profilePictureUrl: "",
    showUsers: [],
};

export const updateRoleUser = createAsyncThunk(
    "role/updateRoleUser",
    async (payload, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const token = localStorage.getItem("access_token");
            if (token) {
                const res = await axios.post(
                    `${BASE_API}/update-user-role/${payload.id}`,
                    {
                        role: payload.role,
                    },
                    {
                        headers: {
                            apiKey: API_KEY,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                return dispatch({
                    type: "role/setNewRole",
                    payload: payload.role,
                });
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        setCangeRoleDataUser: (state, action) => {
            state.role = action.payload.role;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.profilePictureUrl = action.payload.profilePictureUrl;
        },
        setNewRole: (state, action) => {
            state.role = action.payload;
            const user = state.showUsers.filter((user) => {
                return user.id === state.id;
            })[0];
            const updatedUser = {
                ...user,
                role: state.role,
            };

            state.showUsers = [
                ...state.showUsers.filter((user) => {
                    return user.id !== state.id;
                }),
                updatedUser,
            ];
        },
        setShowUsers: (state, action) => {
            state.showUsers = action.payload;
        },
        clearRoleUserData: (state, action) => {
            state.id = "";
            state.name = "";
            state.role = "";
            state.profilePictureUrl = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateRoleUser.fulfilled, (state, action) => {});
        builder.addCase(updateRoleUser.rejected, (state, action) => {});
    },
});

export const { setCangeRoleDataUser, setShowUsers, clearRoleUserData } =
    roleSlice.actions;
export default roleSlice.reducer;
