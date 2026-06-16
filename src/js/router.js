
import cssLoader from './util/cssLoader.js';
import Home from './pages/Home.js';
const routes = {
  '/': Home,
  //'/about': About,
  //'/contact': Contact
};

export function router() {
    const path = window.location.pathname;

    const page = routes[path] || Home;

    cssLoader(page.css);
    document.getElementById("app").innerHTML = page.render();

    if (page.init) {
        page.init();
    }
}