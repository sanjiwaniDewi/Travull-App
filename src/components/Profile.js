export default function Profile({ userData }) {
    console.log(userData);
    return (
        <div key={userData.id} className="flex flex-col gap-y-1">
            <img
                src={userData.profilePictureUrl}
                className="rounded-full w-52 h-52 object-cover "
                alt="User Avatar"
            />
            <p className="text-3xl font-bold mb-1 mt-3">{userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone Number: {userData.phoneNumber}</p>
            <p>Role: {userData.role}</p>
        </div>
    );
}
