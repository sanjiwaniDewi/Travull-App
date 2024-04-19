"use client";
import { useDispatch, useSelector } from "react-redux";
import ImagePreview from "./ImagePreview";
import UploadImage from "./UploadImage";
import useCreate from "@/hooks/useCreate";
import { useRouter } from "next/navigation";
import { deleteImageUrl } from "@/redux/features/upload/imageSlice";
import useUpdate from "@/hooks/useUpdate";

export default function BannerForm({ bannerData }) {
    const { createBanner } = useCreate();
    const { updateBanner } = useUpdate();
    const { imageUrl } = useSelector((store) => store.image);
    const { isEdit } = useSelector((store) => store.edit);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleSubmitBanner = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        if (bannerData) {
            updateBanner(bannerData.id, {
                name,
                imageUrl: bannerData.imageUrl,
            });
        } else {
            createBanner({ name, imageUrl });
        }
        dispatch(deleteImageUrl());
        // router.push("/dashboard");
    };
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="w-1/2 self-center">
                <ImagePreview figureUrl={bannerData && bannerData?.imageUrl} />
                <UploadImage />
            </div>
            <form onSubmit={handleSubmitBanner} className="self-center w-1/2">
                <input
                    defaultValue={bannerData ? bannerData?.name : ""}
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
