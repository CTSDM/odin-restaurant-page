export default function home() {
    const listContentParameters = [{type:"div", id:"welcome", class:"", text:"Welcome to our restaurant webpage"},
        {type:"div", id: "message", class: "", text: "Meet the new food in town."},
        {type:"div", id: "", class: "picture", text: ""},
        {type:"div", id: "footer", class: "", text: "The authentic Chanin experience!"}];

    const contentDiv = document.querySelector("#content");
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    for (const item of listContentParameters) {
        contentDiv.appendChild(initializeElement(item));
    }

    function initializeElement(parametersDict) {
        const tempDiv = document.createElement(parametersDict.type);
        if (parametersDict.id.length !== 0)
            tempDiv.id = parametersDict.id;
        if (parametersDict.class.length !== 0)
            tempDiv.classList.add(parametersDict.class);
        if (parametersDict.text.length !== 0)
            tempDiv.textContent = parametersDict.text;
        return tempDiv;
    }
}
