const hamburger_menu = document.querySelector("#hamburguer_button");
const menu_down = document.querySelector("#hamburguer_menu_link");
const nav_header = document.querySelector("#nav_id");


hamburger_menu.addEventListener("click", function () {
    console.log("clock hamburguer");

    console.log(window.location.hostname)
    console.log(window.location.pathname)

    if (hamburger_menu.classList.contains("open")) {
        hamburger_menu.classList.remove("open");
        menu_down.classList.add("closed");
        nav_header.classList.remove("remove_radius");
    }
    else {
        hamburger_menu.classList.add("open");
        menu_down.classList.remove("closed");
        nav_header.classList.add("remove_radius");
    }
});

