const initialState = {
    id: "",
    role: "",
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
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
});

// export const { getLoggedUser, updateUserRole } = roleSlice.actions;
export default roleSlice.reducer;
