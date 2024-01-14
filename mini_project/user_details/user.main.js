import {baseURL, urls} from "../configs/constants.js";
import {getElementData, elementPrinter, getAllElements, modeTheme} from "../functions";
import {header} from "../header/header.js";

const user = getElementData();
const userDiv = document.createElement("div");
userDiv.classList.add("userDiv");
const userHeader = document.createElement("h1");
userHeader.innerText = "User details";
const userInfo = document.createElement("div");
userInfo.classList.add("userInfo");
elementPrinter(user, userInfo);
userDiv.append(userHeader, userInfo);
const postsDiv = document.createElement("div");
postsDiv.classList.add("postsDiv", "flex");
const postButton = document.createElement("button");
postButton.innerText = "Posts of current user";
document.body.append(header, userDiv);
modeTheme();
const userPosts = document.createElement("div");
userPosts.id = "userPosts";
userPosts.classList.add("flex");
getAllElements(`${baseURL}${urls.users}/${user.id}${urls.posts}`, "../post_details/post.index.html?data=", userPosts);
postsDiv.append(postButton, userPosts);
document.body.appendChild(postsDiv);

postButton.onclick = () => {
    const accordion = document.getElementById("userPosts");
    if (accordion.style.maxHeight) {
        accordion.style.maxHeight = null;
    } else {
        accordion.style.maxHeight = accordion.scrollHeight + "px";
    }
}
