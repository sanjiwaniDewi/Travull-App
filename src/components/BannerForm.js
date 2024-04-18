"use client";
import { useSelector } from "react-redux";
import ImagePreview from "./ImagePreview";
import UploadImage from "./UploadImage";
import useCreate from "@/hooks/useCreate";
import { useRouter } from "next/navigation";

export default function BannerForm() {
    const { createBanner } = useCreate();
    const { imageUrl } = useSelector((store) => store.image);
    const router = useRouter();
    const handleSubmitBanner = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        createBanner({ name, imageUrl });
        router.push("/dashboard");
    };
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="w-1/2 self-center">
                <ImagePreview />
                <UploadImage />
            </div>
            <form onSubmit={handleSubmitBanner} className="self-center w-1/2">
                <input
                    name="name"
                    className="w-full focus:outline-none py-2 mb-2 "
                    placeholder="Banner Name"
                />
                <div>
                    <button
                        type="submit"
                        className="bg-slate-500 text-sm text-white py-2  px-4 rounded-2xl w-1/2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
