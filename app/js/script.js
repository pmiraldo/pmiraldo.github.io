const hamburger_menu = document.querySelector("#hamburguer_button");
const menu_down = document.querySelector("#hamburguer_menu_link");
const nav_header = document.querySelector("#nav_id");
const body = document.querySelector("#body_id");
const header = document.querySelector("#header_id");

hamburger_menu.addEventListener("click", function (){

    console.log("blabla");

    if (hamburger_menu.classList.contains("open")) {
        hamburger_menu.classList.remove("open");
        menu_down.classList.add("closed");
        nav_header.classList.remove("remove_radius");
        header.classList.remove("header_show_down_menu");
        body.classList.remove("stop_scroll");
    }
    else {
        hamburger_menu.classList.add("open");
        menu_down.classList.remove("closed");
        nav_header.classList.add("remove_radius");
        header.classList.add("header_show_down_menu");
        body.classList.add("stop_scroll");
    }
});

