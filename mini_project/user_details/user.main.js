import {getElementData} from "../functions/getElementData.js";
import {elementPrinter} from "../functions/elementPrinter.js";
import {getAllElements} from "../functions/getAllElements.js";
import {baseURL, urls} from "../functions/constants.js";
import {header} from "../header/header.js";
import {modeTheme} from "../functions/modeTheme.js";

const user = getElementData();
console.log(user);
const userHeader = document.createElement("h1");
userHeader.innerText = "User details";
const userInfo = document.createElement("div");
userInfo.classList.add("userInfo");
elementPrinter(user, userInfo);
const postButton = document.createElement("button");
postButton.innerText = "Posts of current user";
document.body.append(header, userHeader, userInfo, postButton);
modeTheme();
const postsDiv = document.createElement("div");
postsDiv.id = "userPosts";
getAllElements(`${baseURL}${urls.users}/${user.id}${urls.posts}`, "../post_details/post.index.html?data=", postsDiv);
document.body.appendChild(postsDiv);

postButton.onclick = () => {
    const accordion = document.getElementById("userPosts");
    if (accordion.style.maxHeight) {
        accordion.style.maxHeight = null;
    } else {
        accordion.style.maxHeight = accordion.scrollHeight + "px";
    }
}
