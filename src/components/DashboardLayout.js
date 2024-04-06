import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <main className="flex">
            <Sidebar />
            {children}
        </main>
    );
}
