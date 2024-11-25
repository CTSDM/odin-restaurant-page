import './style.css';
import homepage from './pages/home.js';
import about from './pages/about.js';
import menu from './pages/menu.js';

(function() {

    const lastButtonCalled = ["home"];
    const buttonListClass = ['home', 'menu', 'about'];
    const funcsList = [homepageCall, menuCall, aboutCall];
    homepage();
    buttonListClass.forEach((e, index) => {
        const btn = document.querySelector(`button.${e}`);
        btn.addEventListener("click", funcsList[index]);
    })

    // We only load a new script, we do not load the same script again and again
    function homepageCall(e) {
        if (checkLastCall(e)) return;
        homepage();
    }

    function aboutCall(e) {
        if (checkLastCall(e)) return;
        about();
    }

    function menuCall(e) {
        if (checkLastCall(e)) return;
        menu();
    }

    function checkLastCall(e) {
        if (lastButtonCalled[0] === e.target.classList[0])
            return true;
        else {
            lastButtonCalled[0] = e.target.classList[0];
            return false;
        }
    }

})();
