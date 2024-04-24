// import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/layout/Sidebar";
// import BootstrapClient from "@/components/BootstrapClient.js";

export default function DashboardLayout({ children }) {
    return (
        <main className="flex relative">
            <Sidebar />
            {children}
            {/* <BootstrapClient /> */}
        </main>
    );
}
