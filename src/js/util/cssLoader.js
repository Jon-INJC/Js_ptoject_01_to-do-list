export default function cssLoader(url) {
    
    removeOldCss();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;

    link.setAttribute("[data-link-css]", "true");
    document.head.appendChild(link);
}

function removeOldCss() {
    const oldLink = document.querySelector('[data-link-css]');
    if (oldLink) {
        oldLink.remove();
    }
}