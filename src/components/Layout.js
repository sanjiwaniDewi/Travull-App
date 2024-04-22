import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <main className=" bg-slate-100">
            <Navbar />
            {children}
        </main>
    );
}
