import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <h1>Travul</h1>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className="nav-button">
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}
