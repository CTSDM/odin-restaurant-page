import apptzr1 from '../images/appetizer_pexels-sebastian-coman-photography-3645126.jpg';
import apptzr2 from '../images/appetizer_pexels-tanya-gorelova-3933162.jpg';
import apptzr3 from '../images/appetizer_pexels-cup-of-couple-8472786.jpg';
import apptzr4 from '../images/appetizer_pexels-foodie-factor-543733.jpg';

import maindsh1 from '../images/main-dish_pexels-j-mad-12973148.jpg';
import maindsh2 from '../images/main-dish_pexels-senuscape-2313686.jpg';
import maindsh3 from '../images/main-dish_pexels-valeria-boltneva-1639563.jpg';
import maindsh4 from '../images/main-dish_pexels-sebastian-coman-photography-3791089.jpg';
import maindsh5 from '../images/main-dish_pexels-галина-ласаева-9829630.jpg';

import dessert1 from '../images/dessert_pexels-ella-olsson-3026804.jpg';
import dessert2 from '../images/dessert_pexels-arminas-raudys-808941.jpg';
import dessert3 from '../images/dessert_pexels-suzy-hazelwood-1126359.jpg';
import dessert4 from '../images/dessert_pexels-david-disponett-2161643.jpg';


export default function() {
    const imgAppetizersList = [apptzr1, apptzr2, apptzr3, apptzr4];
    const imgMainDishesList = [maindsh1, maindsh2, maindsh3, maindsh4, maindsh5];
    const imgDessertsList = [dessert1, dessert2, dessert3, dessert4];

    const appetizersList = ["eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc"
    ,"ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc"
    ,"phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum"
    ,"odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum"
    ];

    const mainDishesList = ["risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
    ,"volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar"
    ,"etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut"
    ,"vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor"
    ,"ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis"
    ];
    const dessertsList = ["risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget"
    ,"sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet"
    ,"neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque"
    ,"quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec"
    ];
    const typeDishesList = ["appetizers", "main-dishes", "desserts"];

    const appetizersImgList = ["../images/appetizer_pexels-foodie-factor-543733.jpg",
    ,"../images/appetizer_pexels-cup-of-couple-8472786.jpg"
    ,"../images/appetizer_pexels-tanya-gorelova-3933162.jpg"
    ,"../images/appetizer_pexels-sebastian-coman-photography-3645126.jpg"
    ];

    const divContent = document.querySelector("#content")
    while(divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    const divMenu = document.createElement("div");
    divMenu.classList.add("menu");
    const divAppetizers = document.createElement("div");
    divAppetizers.classList.add(typeDishesList[0]);
    const divMainDishes = document.createElement("div");
    divMainDishes.classList.add(typeDishesList[1]);
    const divDesserts = document.createElement("div");
    divDesserts.classList.add(typeDishesList[2]);


    appetizersList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const divTemp2 = document.createElement("div");
        const imgFood = document.createElement("img");
        divTemp.textContent = el;
        imgFood.src = imgAppetizersList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divAppetizers.appendChild(divTemp);
    });
    mainDishesList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const divTemp2 = document.createElement("div");
        const imgFood = document.createElement("img");
        divTemp.textContent = el;
        imgFood.src = imgMainDishesList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divMainDishes.appendChild(divTemp);
    });
    dessertsList.forEach((el, index) => {
        const divTemp = document.createElement("div");
        const imgFood = document.createElement("img");
        const divTemp2 = document.createElement("div");
        divTemp.textContent = el;
        imgFood.src = imgDessertsList[index];
        divTemp2.appendChild(imgFood);
        divTemp.appendChild(divTemp2);
        divDesserts.appendChild(divTemp);
    });
    
    divMenu.appendChild(divAppetizers);
    divMenu.appendChild(divMainDishes);
    divMenu.appendChild(divDesserts);
    divContent.appendChild(divMenu);
}
