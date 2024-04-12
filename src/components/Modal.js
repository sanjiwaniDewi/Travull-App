import Card from "./Card";

export default function Modal({ children }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <Card>{children}</Card>
        </div>
    );
}
