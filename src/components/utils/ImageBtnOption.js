export default function ImageBtnOption({ haveImageUrl, uploadImage }) {
    return (
        <div className="flex w-11/12 justify-center font-semibold text-md ">
            <button
                className="text-center py-2 bg-slate-400 w-1/2 text-sm outline outline-1 outline-slate-500 "
                onClick={uploadImage}
            >
                Upload Image
            </button>
            <button
                className="text-center py-2 bg-slate-400 w-1/2 text-sm outline outline-1 outline-slate-500 "
                onClick={haveImageUrl}
            >
                Have Image Url
            </button>
        </div>
    );
}
