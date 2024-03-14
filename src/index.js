import './style.css';
import homepage from './pages/home.js';

(function () {
    homepage();
    const btnHome = document.querySelector("button.home");
    btnHome.addEventListener("click", homepage);
})();
