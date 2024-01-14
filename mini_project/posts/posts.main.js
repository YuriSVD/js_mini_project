import {baseURL, urls} from "../configs/constants.js";
import {getAllElements, modeTheme} from "../functions";
import {header} from "../header/header.js";

//export const postsPath = document.location.href;

const wrap = document.createElement("div");
const h2 = document.createElement("h2");
h2.innerText = "All posts"
getAllElements(`${baseURL}${urls.posts}`, "../post_details/post.index.html?data=", wrap);
document.body.append(header, h2, wrap);
modeTheme();