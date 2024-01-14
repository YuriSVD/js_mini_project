import {baseURL, urls} from "../configs/constants.js";
import {getElementData, elementPrinter, getAllElements, modeTheme} from "../functions";
import {header} from "../header/header.js";

const post = getElementData();
const wrap = document.createElement("div");
wrap.classList.add("wrap");
const headerToPost = document.createElement("h3");
headerToPost.innerText = "Selected post details";
const postInfo = document.createElement("div");
postInfo.id = "postInfo";
const commentsDiv = document.createElement("div");
commentsDiv.classList.add("commentsDiv");
elementPrinter(post, postInfo);
const headerToComments = document.createElement("h3");
headerToComments.innerText = "Comments to current post";
getAllElements(`${baseURL}${urls.posts}/${post.id}${urls.comments}`, "", commentsDiv);
wrap.append(headerToPost, postInfo, headerToComments, commentsDiv)
document.body.append(header, wrap);
modeTheme();