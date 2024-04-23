import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ActivitySection from "@/components/homepage/activity/ActivitySection";
import CategorySection from "@/components/homepage/category/CategorySection";
import HeaderImage from "@/components/homepage/header/HeaderImage";
import PromoSection from "@/components/homepage/promo/PromoSection";

export default function Home() {
    return (
        <Layout>
            <article className="static w-full mb-auto pb-28 flex min-h-screen flex-col items-center justify-between top-0">
                <HeaderImage />

                <PromoSection />
                <CategorySection />
                <ActivitySection />
            </article>
        </Layout>
    );
}
