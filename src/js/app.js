
import { router } from "./router.js";

document.addEventListener("click", (e)=> {
    const link = e.target.closest("[data-link]");

    if (!link) return;
    e.preventDefault();

    let url;

    if (link.target === "A") {
        url = link.getAttribute("href");
    }else if(link.target === "BUTTON") {

        url = link.getAttribute("data-href");
    }

    history.pushState(null, null, url);

    router();
});

window.addEventListener("popstate", router);

router();