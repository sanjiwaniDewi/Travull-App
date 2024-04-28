export default function FormUpdate({ handleUpdateUser, dataUser }) {
    return (
        <div>
            <form
                onSubmit={handleUpdateUser}
                className="flex flex-col md:w-96  w-full gap-y-3 mt-5"
            >
                <label className="flex flex-col text-sm">
                    Name :
                    <input
                        className="text-black bg-primary-100 mt-1 px-2 py-4 rounded-xl focus:outline-secondary-100"
                        type="text"
                        defaultValue={dataUser.name}
                        placeholder="name"
                        name="name"
                    />
                </label>
                <label className="flex flex-col text-sm">
                    Email :
                    <input
                        className="text-black bg-primary-100 mt-1 px-2 py-4 rounded-xl focus:outline-secondary-100"
                        type="text"
                        defaultValue={dataUser.email}
                        placeholder="email"
                        name="email"
                    />
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
                    className=" mt-4  w-full px-2 py-3 rounded-xl font-bold  bg-secondary-100 text-primary-200 "
                >
                    submit
                </button>
            </form>
        </div>
    );
}
