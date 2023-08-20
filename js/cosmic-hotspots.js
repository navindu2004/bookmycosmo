const hyperlinks = document.querySelectorAll("a");

hyperlinks.forEach(hyperlink => {
    hyperlink.addEventListener("click", () => {
        localStorage.setItem("destination-id", hyperlink.id);
    });
});