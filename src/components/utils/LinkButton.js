import Link from "next/link";
export default function LinkButton({ title, link, customStyle }) {
    return (
        <Link
            href={link}
            className={`border border-primary-200 font-semibold text-slate-800 text-md  p-2 rounded-xl hover:text-primary-100 hover:scale-105 hover:bg-primary-200 ${customStyle}`}
        >
            {title}
        </Link>
    );
}
