import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <main className="flex relative">
            <Sidebar />
            {children}
        </main>
    );
}
