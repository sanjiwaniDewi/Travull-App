import Link from "next/link";

export default function Profile({ userData }) {
    console.log(userData);
    return (
        <div
            key={userData.id}
            className="container mx-auto w-full flex lg:flex-row flex-col px-5 justify-between p-4 gap-12 "
        >
            <div className=" w-full">
                <img
                    src={userData.profilePictureUrl}
                    className="w-full object-cover rounded-3xl h-72"
                    alt="User Avatar"
                />
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <p className="text-5xl font-bold mb-1 mt-3">
                    {userData.name}{" "}
                    <span className="mt-4 py-1 w-fit text-center outline outline-1 font-medium outline-slate-300   px-1 text-sm rounded-xl">
                        {userData.role}
                    </span>
                </p>
                <div className="text-lg font-light mt-2 ps-4">
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phoneNumber}</p>
                </div>
                <Link href="/profile/update-profile">
                    <button className="mt-4 py-3 ms-4 bg-slate-500 text-white px-4 font-semibold text-sm rounded-xl w-44">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </div>
    );
}
