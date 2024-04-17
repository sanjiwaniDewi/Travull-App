import useDelete from "@/hooks/useDelete";

export default function handleDeleteItem(id, type) {
    const { deleteBannerId } = useDelete();
    switch (type) {
        case "banner":
            return deleteBannerId(id);
        case "promo":
            return;
        case "category":
            return;
        case "Activity":
            return;
        default:
            return;
    }
}
