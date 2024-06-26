"use client";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DetailModalHomePage from "../utils/DetailModalHomePage";

export default function Layout({ children }) {
    const { showModal } = useSelector((state) => state.modal);
    return (
        <main className=" bg-slate-100 font-inter">
            <Navbar />
            {children}
            {showModal && <DetailModalHomePage />}
            <Footer />
        </main>
    );
}
