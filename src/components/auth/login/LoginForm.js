import { login, setErrMessage } from "@/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginForm } from "@/utils/handleInputForm";
import Link from "next/link";

export default function LoginForm() {
    const { isLoading, errMessage } = useSelector((store) => store.auth);

    const dispatch = useDispatch();

    const handleChange = () => {
        if (errMessage.length > 0) {
            dispatch(setErrMessage([]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { customError, payload } = handleLoginForm(formData);

        if (customError) {
            dispatch(setErrMessage(customError));
        }

        if (!errMessage.length && payload) {
            dispatch(login(payload));
        }
    };

    return (
        <div className=" mx-auto my-auto px-4 py-8 rounded-3xl bg-opacity-70 bg-transparent">
            <div>
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

                <div>
                    <p className="text-sm w-96 text-center text-red-600  ">
                        {Array.isArray(errMessage)
                            ? errMessage.join(" ")
                            : errMessage}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="container mx-auto flex flex-col gap-2 w-96 mt-2 text-black"
                    onChange={handleChange}
                >
                    <label className="text-sm">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="bg-secondary-100 bg-opacity-45 hover:bg-secondary-200 hover:bg-opacity-50 px-3 py-3 rounded-xl focus:outline-none"
                    />

                    <label className="text-sm">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="bg-secondary-100 bg-opacity-45 hover:bg-secondary-200 hover:bg-opacity-50 px-3 py-3 rounded-xl focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-slate-50 mt-4 px-2 py-3 border-2  rounded-xl font-bold bg-primary-200 hover:text-primary-200 hover:bg-secondary-200 disabled:bg-slate-200 disabled:text-slate-400"
                        disabled={errMessage.length || isLoading}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
                <div className="mt-4 flex justify-center gap-3">
                    <p>Belum punya akun?</p>
                    <Link
                        href="/register"
                        className="text-zinc-900 hover:text-blue-600 underline"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
