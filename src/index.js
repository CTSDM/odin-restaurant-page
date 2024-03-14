import './style.css';
import homepage from './pages/home.js';
import about from './pages/about.js';

(function () {
    // homepage();
    const btnHome = document.querySelector("button.home");
    btnHome.addEventListener("click", homepage);
    about();
})();
