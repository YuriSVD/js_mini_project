import {elementPrinter} from "./elementPrinter.js";

export const getAllElements = (url, href, wrap) => {
    fetch(url)
        .then(value => value.json())
        .then(value => {
            for (const element of value) {
                if (href) {
                    let name = element.name;
                    if (!name) {
                        name = element.title; //костиль :)
                    }
                    const div = document.createElement("div");
                    div.classList.add("linkDiv", "flex");
                    const a = document.createElement("a");
                    a.href = href + JSON.stringify(element);
                    a.innerText = `${element.id}. ${name}`;
                    div.appendChild(a)
                    wrap.appendChild(div);
                } else {
                    const elementWrap = document.createElement("div");
                    elementWrap.classList.add("elementWrap");
                    elementPrinter(element, elementWrap);
                    wrap.appendChild(elementWrap);
                }
            }
        });
};