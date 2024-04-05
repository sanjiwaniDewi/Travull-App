export default function Profile({ userData }) {
    console.log(userData);
    return (
        <div key={userData.id}>
            <img src={userData.profilePictureUrl} />
            <p>Nama: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone Number: {userData.phoneNumber}</p>
            <p>Role: {userData.role}</p>
        </div>
    );
}
