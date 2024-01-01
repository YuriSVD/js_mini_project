export const getElementData = () => {
    let url = new URL(location.href);
    return JSON.parse(url.searchParams.get("data"));
}