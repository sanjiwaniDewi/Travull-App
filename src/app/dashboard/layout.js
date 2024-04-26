// import "bootstrap/dist/css/bootstrap.css";
"use client";
import SidebarClose from "@/components/layout/SidebarClose";
import Sidebar from "../../components/layout/Sidebar";
import { useEffect, useState } from "react";
import NavbarDashboard from "@/components/layout/NavbarDashboard";

// import BootstrapClient from "@/components/BootstrapClient.js";

export default function DashboardLayout({ children }) {
    const [showSideBar, setShowSideBar] = useState(true);
    const [screenSize, setScreenSize] = useState();
    const [navbar, setNavbar] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenSize(window.innerWidth);
    //     };

    //     window.addEventListener("resize", handleResize);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);
    // const handleNavbar = () => {
    //     if (screenSize < 800) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // };
    // useEffect(() => {
    //     handleNavbar();
    // }, [screenSize]);
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
        console.log(showSideBar);
    };

    return (
        <main className="flex relative font-titi">
            {showSideBar ? (
                <Sidebar handleShowSideBar={handleShowSideBar} />
            ) : (
                <SidebarClose handleShowSideBar={handleShowSideBar} />
            )}
            <NavbarDashboard />
            {children}
            {/* <BootstrapClient /> */}
        </main>
    );
}
