export default function CategoryImage({ image }) {
    return (
        <div className="relative w-3/4 h-96 ">
            <img
                src={image}
                className="w-full h-full object-cover rounded-3xl"
                alt="Category image"
            />
        </div>
    );
}
