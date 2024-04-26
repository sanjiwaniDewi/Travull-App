import { configureStore, Tuple } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";
import imageReducer from "@/redux/features/upload/imageSlice";
import modalReducer from "@/redux/features/modal/modalSlice";
import userReducer from "@/redux/features/user/userSlice";
import statusReducer from "@/redux/features/status/statusSilce";
import dataReducer from "@/redux/features/data/dataSlice";
import roleReducer from "@/redux/features/role/roleSlice";
export const makeStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            auth: authReducer,
            image: imageReducer,
            user: userReducer,
            modal: modalReducer,
            status: statusReducer,
            data: dataReducer,
            role: roleReducer,
        },
    });
};
