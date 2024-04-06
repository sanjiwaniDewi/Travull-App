import LogoutButton from "./LogoutButton";

export default function Sidebar() {
    return (
        <aside>
            <div>
                <img src="" alt="avatar" />
            </div>
            <div>
                <ul>
                    <li>User</li>
                    <li>Banner</li>
                    <li>Promotion</li>
                    <li>Category</li>
                    <li>Activity</li>
                </ul>
            </div>
            <div>
                <LogoutButton />
            </div>
        </aside>
    );
}
