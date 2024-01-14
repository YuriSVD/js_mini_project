
export const header = document.createElement("div");
header.classList.add("header");
const switchTheme = document.createElement("div");
const input = document.createElement("input");
input.type = "checkbox";
input.id = "checkbox";
const label = document.createElement("label");
label.classList.add("label");
label.htmlFor = "checkbox";
const ball = document.createElement("div");
ball.id = "ball";
label.appendChild(ball);
switchTheme.append(input, label);
const navigator = document.createElement("div");
navigator.classList.add("navigator");
const homePage = document.createElement("a");
homePage.innerText = "All Users";
const posts = document.createElement("a");
posts.innerText = "All Posts";

homePage.href = localStorage.getItem("rootPath") + "/index.html"; //window.location.origin + "/js_mini_project/mini_project/index.html";
posts.href = localStorage.getItem("rootPath") + "/posts/posts.index.html";  //window.location.origin + "/js_mini_project/mini_project/posts/posts.index.html";

navigator.append(homePage, posts);
header.style.borderBottom = "black solid 1px"; // maybe
header.append(navigator, switchTheme);

input.addEventListener("change", () => {
    document.body.classList.toggle("darkTheme");
    const modeTheme = document.body.className;
    localStorage.setItem("themeMode", modeTheme);
    const ball = document.getElementById("ball");
    modeTheme ? ball.style.transform = "translateX(1.25vw)" : ball.style.transform = "translateX(0)";
})