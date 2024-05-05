"use client";

import SidebarClose from "@/components/layout/SidebarClose";
import Sidebar from "../../components/layout/Sidebar";
import NavbarDashboard from "@/components/layout/NavbarDashboard";

export default function DashboardLayout({ children }) {
    const [showSideBar, setShowSideBar] = useState(true);

    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
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
        </main>
    );
}
