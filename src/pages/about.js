import Image from "../images/chef_mhw.jpg";

export default function() {
    const img = document.querySelector("img"); 
    img.src = Image;
    console.log(img);
}
