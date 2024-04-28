export default function ImageBtnOption({
    haveImageUrl,
    uploadImage,
    isHaveImageUrl,
}) {
    return (
        <div className="flex w-11/12 justify-center font-semibold text-md ">
            <button
                className="text-center py-2 bg-primary-200 w-1/2 text-sm  text-secondary-200  hover:text-primary-200 hover:bg-secondary-200 disabled:bg-secondary-200 disabled:text-white disabled:cursor-not-allowed"
                onClick={uploadImage}
                disabled={isHaveImageUrl ? false : true}
            >
                Upload Image
            </button>
            <button
                className="text-center py-2 bg-primary-200 w-1/2 text-sm  text-secondary-200 hover:text-primary-200 hover:bg-secondary-200 disabled:bg-secondary-200 disabled:text-white disabled:cursor-not-allowed"
                onClick={haveImageUrl}
                disabled={isHaveImageUrl ? true : false}
            >
                Have Image Url
            </button>
        </div>
    );
}
