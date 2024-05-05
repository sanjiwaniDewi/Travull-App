"use client";
import { useEffect, useState } from "react";
export default function FormUpdate({ handleUpdateUser, dataUser }) {
    const [errorMessage, setErrorMessage] = useState("");
    const handleErrorMessage = () => {
        if (dataUser?.errorMessage) {
            setErrorMessage(dataUser?.errorMessage?.split(","));
        }
    };
    console.log("eeer", errorMessage);

    useEffect(() => {
        handleErrorMessage();
    }, [dataUser?.errorMessage]);

    const onChangeForm = (e) => {
        setErrorMessage("");
    };

    return (
        <div>
            <form
                onSubmit={handleUpdateUser}
                className="flex flex-col w-full gap-y-3 mt-5"
                onChange={onChangeForm}
            >
                <label className="flex flex-col text-sm">
                    Name :
                    <input
                        className="text-black bg-primary-100 mt-1 px-2 py-4 rounded-xl focus:outline-secondary-100"
                        type="text"
                        defaultValue={dataUser.name}
                        placeholder="nama"
                        name="name"
                    />
                    {errorMessage &&
                        errorMessage.filter((e) => e.includes("name"))
                            .length !== 0 && (
                            <p className="text-red-600 text-sm flex text-start ">
                                Nama tidak boleh kosong
                            </p>
                        )}{" "}
                </label>

                <label className="flex flex-col text-sm">
                    Email :
                    <input
                        className="text-black bg-primary-100 mt-1 px-2 py-4 rounded-xl focus:outline-secondary-100"
                        type="email"
                        defaultValue={dataUser.email}
                        placeholder="email"
                        name="email"
                    />
                    {errorMessage &&
                        errorMessage.filter((e) => e.includes("email"))
                            .length !== 0 && (
                            <p className="text-red-600 text-sm flex text-start ">
                                Email tidak boleh kosong
                            </p>
                        )}
                </label>
                <label className="flex flex-col text-sm">
                    Phone Number :
                    <input
                        className="text-black bg-primary-100 mt-1 px-2 py-4 rounded-xl focus:outline-secondary-100"
                        type="text"
                        defaultValue={dataUser.phoneNumber}
                        placeholder="phone number"
                        name="phoneNumber"
                    />
                </label>
                <button
                    type="sumbit"
                    className=" mt-4  w-full px-2 py-3 rounded-xl font-bold  hover:bg-secondary-100 hover:text-primary-200 bg-primary-200 text-slate-200"
                >
                    submit
                </button>
            </form>
        </div>
    );
}
