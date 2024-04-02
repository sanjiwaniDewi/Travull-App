import { configureStore, Tuple } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";

export const makeStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            auth: authReducer,
        },
    });
};
