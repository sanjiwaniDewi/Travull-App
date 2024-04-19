export default function Card({ children }) {
    return (
        <div className="block  p-6 bg-white border border-gray-200 rounded-lg lg:mx-auto mx-8">
            {children}
        </div>
    );
}
