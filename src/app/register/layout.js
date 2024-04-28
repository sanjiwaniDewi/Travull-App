import "bootstrap/dist/css/bootstrap.css";
// import Sidebar from "../../components/layout/Sidebar";
import BootstrapClient from "@/components/utils/BootstrapClient";

export default function AuthLayout({ children }) {
    return (
        <main className="flex relative w-full h-full registerBackground ">
            {children}
            <BootstrapClient />
        </main>
    );
}
