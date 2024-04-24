import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <main className=" bg-slate-100">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
