export default function Toast({ children }) {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center w-100 h-100 z-50 absolute"
        >
            <div
                className=" p-6 bg-white border border-gray-200 rounded-lg lg:w-1/3 w-3/4 min-h-52 flex flex-col justify-center items-center"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-body">{children}</div>
            </div>
        </div>
    );
}
