import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/utils/BootstrapClient";

export default function AuthLayout({ children }) {
    return (
        <main className="flex relative w-full h-full registerBackground ">
            {children}
            <BootstrapClient />
        </main>
    );
}
