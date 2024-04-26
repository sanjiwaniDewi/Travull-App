import { Inter, Titillium_Web } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
// import BootstrapClient from "@/components/utils/BootstrapClient.js";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const titillium_Web = Titillium_Web({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-titi",
});

export const metadata = {
    title: "Travull App",
    description: "Generated by create next app",
    icons: {
        icon: "/src/app/icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <StoreProvider>
            <html
                lang="en"
                className={`${inter.variable} ${titillium_Web.variable}`}
            >
                <body className="" suppressHydrationWarning={true}>
                    {children}
                    {/* <BootstrapClient /> */}
                </body>
            </html>
        </StoreProvider>
    );
}
