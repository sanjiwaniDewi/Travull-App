import Layout from "@/components/Layout";
import HeaderImage from "@/components/homepage/header/HeaderImage";

export default function Home() {
    return (
        <Layout>
            <div className="flex min-h-screen flex-col items-center justify-between">
                <HeaderImage />
            </div>
        </Layout>
    );
}
