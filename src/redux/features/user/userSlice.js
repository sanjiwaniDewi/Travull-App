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
    users: {
        data: [],
        totalData: 0,
        dataShow: [],
        totalPages: 0,
        currentPage: 0,
    },
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

export const getAllUser = createAsyncThunk(
    "user/getAllUser",
    async (payload, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        try {
            const token = localStorage.getItem("access_token");
            if (token) {
                const res = await axios.get(`${BASE_API}/all-user`, {
                    headers: {
                        apiKey: API_KEY,
                        Authorization: `Bearer ${token}`,
                    },
                });
                return dispatch({
                    type: "user/setAllUser",
                    payload: res.data.data,
                });
            }
        } catch (err) {
            return rejectWithValue(err);
        }
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

// export const updateRoleUser = createAsyncThunk(
//     "user/updateRoleUser",
//     async (payload, thunkAPI) => {
//         const { rejectWithValue, dispatch, fulfillWithValue } = thunkAPI;
//         try {
//             const token = localStorage.getItem("access_token");
//             if (token) {
//                 const res = await axios.post(
//                     `${BASE_API}/update-user-role/${payload.id}`,
//                     {
//                         role: payload.role,
//                     },
//                     {
//                         headers: {
//                             apiKey: API_KEY,
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );
//                 return dispatch(getAllUser())
//             }
//         } catch (err) {
//             return rejectWithValue(err);
//         }
//     }
// );

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
        setAllUser(state, action) {
            state.users.data = action.payload;
            state.users.totalData = action.payload.length;
            state.users.totalPages = Math.ceil(action.payload.length / 12);
            state.users.dataShow = state.users.data.slice(0, 12);
            state.users.currentPage = 1;
        },

        setCurrenPageDataUser(state, action) {
            state.users.currentPage = action.payload;
            state.users.dataShow = state.users.data.slice(
                (action.payload - 1) * 12,
                action.payload * 12
            );
        },
        setUpdatedUserShow(state, action) {
            state.users.dataShow = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fatchUserLogged.fulfilled, (state, action) => {
            localStorage.setItem("role", state.role);
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {});
        // builder.addCase(updateRoleUser.fulfilled, (state, action) => {
        //     if (state.id === action.payload.id) {
        //         state.role = action.payload.role;
        //     }
        // });
    },
});

export const { getLoggedUser, setCurrenPageDataUser, setUpdatedUserShow } =
    userSlice.actions;
export default userSlice.reducer;
