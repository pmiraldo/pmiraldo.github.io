const hamburger_menu = document.querySelector("#hamburguer_button");
const menu_down = document.querySelector("#hamburguer_menu_link");
const nav_header = document.querySelector("#nav_id");
const body = document.querySelector("#body_id");
const header = document.querySelector("#header_id");

hamburger_menu.addEventListener("click", function (){

    if (hamburger_menu.classList.contains("open")) {
        hamburger_menu.classList.remove("open");
        menu_down.classList.add("header_menu_links_closed");
        header.classList.remove("header_remove_radius");
        header.classList.remove("header_show_down_menu");
        body.classList.remove("stop_scroll");
    }
    else {
        hamburger_menu.classList.add("open");
        menu_down.classList.remove("header_menu_links_closed");
        header.classList.add("header_remove_radius");
        header.classList.add("header_show_down_menu");
        body.classList.add("stop_scroll");
    }
});

