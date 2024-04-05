import { useState } from "react";

import { useDispatch } from "react-redux";

import Image from "next/image";
import { register } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [image, setImage] = useState("/Avatar-Image.png");

    const dispatch = useDispatch();

    const router = useRouter();
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const phoneNumber = formData.get("phoneNumber");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordRepeat = formData.get("passwordRepeat");
        const role = formData.get("role");

        const payload = {
            name,
            email,
            password,
            passwordRepeat,
            profilePictureUrl: image,
            phoneNumber,
            role,
        };
        // console.log(payload);

        try {
            dispatch(register(payload));
            router.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex flex-col  w-96 gap-y-2 text-black"
        >
            <input type="text" name="name" placeholder="name" />

            <input type="text" name="phoneNumber" placeholder="phone number" />
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input
                type="password"
                name="passwordRepeat"
                placeholder="repeat password"
            />
            <select name="role">
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
            </select>
            <button type="submit" className="text-slate-50">
                Register
            </button>
        </form>
    );
}
