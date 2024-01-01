import {getAllElements} from "./functions/getAllElements.js";
import {baseURL, urls} from "./functions/constants.js";
import {header} from "./header/header.js";
import {modeTheme} from "./functions/modeTheme.js";

const wrap = document.createElement("div");
wrap.classList.add("wrap");
getAllElements(baseURL+urls.users, "user_details/user.index.html?data=", wrap);
document.body.append(header, wrap);
modeTheme();