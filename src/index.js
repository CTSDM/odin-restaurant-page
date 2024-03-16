import './style.css';
import homepage from './pages/home.js';
import about from './pages/about.js';

(function () {

    const lastButtonCalled = ["home"];
    const buttonListClass = ['home', 'menu', 'delivery', 'about'];
    const funcsList = [homepageCall, aboutCall, homepageCall, aboutCall];
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

    function checkLastCall(e) {
        if (lastButtonCalled[0] === e.target.classList[0])
            return true;
        else {
            lastButtonCalled[0] = e.target.classList[0];
            return false;
        }
    }

})();
