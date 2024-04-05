import { configureStore, Tuple } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";
import imageReducer from "@/redux/features/upload/imageSlice";

import userReducer from "@/redux/features/user/userSlice";
export const makeStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            auth: authReducer,
            image: imageReducer,
            user: userReducer,
        },
    });
};
