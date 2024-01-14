import {baseURL, urls} from "./configs/constants.js";
import {getAllElements, modeTheme} from "./functions";
import {header} from "./header/header.js";


localStorage.setItem("rootPath", document.location.href.substring(0, document.location.href.lastIndexOf("/")))

const wrap = document.createElement("div");
wrap.classList.add("wrap");
getAllElements(baseURL + urls.users, "user_details/user.index.html?data=", wrap);
document.body.append(header, wrap);
modeTheme();