import LinkButton from "../utils/LinkButton";

export default function Profile({ userData }) {
    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg ">
            <div
                key={userData.id}
                className=" flex lg:flex-row flex-col justify-between gap-12  w-full"
            >
                <div className="w-full">
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
                    <LinkButton
                        link={"/profile/update-profile"}
                        title={"Edit Profil"}
                        customStyle={"w-fit mt-4 ms-4 px-4"}
                    />
                </div>
            </div>
        </div>
    );
}
