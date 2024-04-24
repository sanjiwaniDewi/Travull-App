export function formatDate(date) {
    const newDate = date?.substring(0, 10);
    return newDate?.split("-")?.reverse()?.join("-");
}

export function convertPrice(price) {
    const newPrice = price.toString();
    if (newPrice?.length > 6) {
        const newLength = newPrice.length - 6;
        return { price: newPrice.slice(0, newLength), unit: "jt" };
    } else {
        const newLength = newPrice.length - 3;
        return { price: newPrice.slice(0, newLength), unit: "rb" };
    }
}

export function priceFormatRp(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatSizeMap(maps, width, height) {
    const replaceWidth = maps?.replace(/width="(\d+)"/g, `width="${width}"`);
    const replaceHeight = replaceWidth?.replace(
        /height="(\d+)"/g,
        `height="${height}"`
    );
    const rounded = replaceHeight?.replace(
        /style="(.*)"/g,
        "style=' border-radius: 24px'"
    );
    return rounded;
}

export function formatFacilities(facilities) {
    const newfacilities = facilities.includes(",")
        ? facilities?.split(",")
        : facilities;
    return newfacilities;
}
