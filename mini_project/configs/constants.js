const baseURL = new URL("https://jsonplaceholder.typicode.com/");
const urls = {
    users: "/users",
    posts: "/posts",
    comments: "/comments"
}
export {baseURL, urls}; //не бачу сенсу створювати index.js для одного файлу