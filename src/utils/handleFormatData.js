export function formatDate(date) {
    const newDate = date?.substring(0, 10);
    return newDate?.split("-")?.reverse()?.join("-");
}
