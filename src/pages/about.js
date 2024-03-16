import image from "../images/chef_mhw.jpg";

export default function about() {

//            <div id="about">Félix House: where authentic food is made~</div>
//            <div class="about-text"><p>At this restaurant you can try dishes as old as Earth itself and as new as the latest Javascript framework. From Spanish food, American food, to even Asian food. Our head chef is able to just nail every single plate he put his mind on. We guarantee you, you will try to come more than once. That is, if your wallet allows it.</p>
//                <p>Without further ado here it is the kitchen crew!</p></div>
//            <div><img id="chef" alt="Picture of our chef"></div>
    const contentDiv = document.querySelector("#content");

    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    let tempDiv = document.createElement("div");
    tempDiv.id = "about";
    tempDiv.textContent = "Félix House: where authentic food is made~";
    contentDiv.appendChild(tempDiv);

    tempDiv = document.createElement("div");
    tempDiv.classList.add("about-text");
    let tempParagraph = document.createElement("p");
    tempParagraph.textContent = "At this restaurant you can try dishes as old as Earth itself and as new as the latest Javascript framework. From Spanish food, American food, to even Asian food. Our head chef is able to just nail every single plate he put his mind on. We guarantee you, you will try to come more than once. That is, if your wallet allows it.";
    tempDiv.appendChild(tempParagraph)
    tempParagraph = document.createElement("p");
    tempParagraph.textContent = "Without further ado here it is the kitchen crew!";
    tempDiv.appendChild(tempParagraph);
    contentDiv.appendChild(tempDiv);

    tempDiv = document.createElement("div");
    const imgElement = document.createElement("img"); 
    imgElement.src = image;
    imgElement.id = "chef"; 
    imgElement.alt = "Picture of our chef";
    tempDiv.appendChild(imgElement);
    contentDiv.appendChild(tempDiv);
}


