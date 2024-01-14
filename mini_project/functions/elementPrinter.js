export const elementPrinter = (element, elementDiv) => {
    for (const elementKey in element) {
        const data = element[elementKey];
        const div = document.createElement("div");
        div.classList.add("item", "flex");
        const keyDiv = document.createElement("div");
        keyDiv.classList.add("keyDiv");
        const keyP = document.createElement("p");
        const valueDiv = document.createElement("div");
        valueDiv.classList.add("valueDiv");
        keyP.innerText = elementKey + ":";
        keyDiv.appendChild(keyP);
        if (typeof data === "object") {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("valueDiv");
            div.append(keyDiv, innerDiv);
            elementDiv.appendChild(div);
            elementPrinter(data, innerDiv);
        } else {
            const valueP = document.createElement("p");
            valueP.innerText = data;
            valueDiv.appendChild(valueP);
            div.append(keyDiv, valueDiv);
            elementDiv.appendChild(div);
        }
    }
};