import {getAllElements} from "../functions/getAllElements.js";
import {baseURL, urls} from "../functions/constants.js";
import {header} from "../header/header.js";
import {modeTheme} from "../functions/modeTheme.js";


const wrap = document.createElement("div");
const h2 = document.createElement("h2");
h2.innerText = "All comments"
getAllElements(`${baseURL}${urls.comments}`, "s", wrap);
document.body.append(header, h2, wrap);
modeTheme();