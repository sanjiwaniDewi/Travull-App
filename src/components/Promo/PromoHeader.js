import PromoCarausel from "../homepage/promo/PromoCarousel";

export default function PromoHeader({ data }) {
    return (
        <div className="container my-auto mx-auto px-5">
            <PromoCarausel data={data} height={"h-96"} show={1} />
        </div>
    );
}
