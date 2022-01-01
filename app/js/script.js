const hamburger_menu = document.querySelector("#hamburguer_button");
const menu_down = document.querySelector("#hamburguer_menu_link");
const nav_header = document.querySelector("#nav_id");
const body = document.querySelector("#body_id");
const header = document.querySelector("#header_id");

const hamburger_menu_projects = document.querySelector("#hamburguer_projects_button");
const hamburguer_projects_link = document.querySelector("#hamburguer_projects_link");

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

hamburger_menu_projects.addEventListener("click", function (){

    if (hamburger_menu_projects.classList.contains("open")) {
        hamburger_menu_projects.classList.remove("open");
        hamburguer_projects_link.classList.add("header_projects_links_closed");
        nav_header.classList.remove("more_opacity");
        // body.classList.remove("stop_scroll");
    }
    else {
        hamburger_menu_projects.classList.add("open");
        hamburguer_projects_link.classList.remove("header_projects_links_closed");
        nav_header.classList.add("more_opacity");
        // body.classList.add("stop_scroll");
    }
});
