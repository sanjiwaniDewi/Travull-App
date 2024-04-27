import Card from "../layout/Card";

export default function Modal({ children }) {
    return (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Card>{children}</Card>
        </div>
    );
}
