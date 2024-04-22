import LoginButton from "./LoginButton";

export default function Navbar() {
    return (
        <nav className=" py-3 bg-opacity-60 bg-slate-300 fixed top-0 z-50 w-full">
            <div className="container mx-auto lg:px-1 px-5 grid lg:grid-cols-5 grid-cols-3">
                <div className="nav-logo text-slate-900 font-extrabold text-3xl content-center">
                    <h1>Travull</h1>
                </div>
                <div className="nav-menu flex justify-start self-center  lg:col-span-3 ">
                    <ul className="flex gap-x-10">
                        <li>Home</li>
                        <li>Promo</li>
                        <li>Activity</li>
                    </ul>
                </div>
                <div className="nav-button flex justify-end self-center">
                    <LoginButton />
                </div>
            </div>
        </nav>
    );
}
