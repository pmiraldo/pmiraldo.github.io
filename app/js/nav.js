fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
.then(
    window.onload = function(){

        const id_page_home = document.querySelectorAll("#go_home");
        const id_page_pub = document.querySelectorAll("#go_publications");
        const id_page_students = document.querySelectorAll("#go_students");
        
        if (window.location.pathname == "/index.html" || window.location.pathname == "/" ) {
            id_page_home.forEach(function(element){
                element.classList.add("selected");
            });
            id_page_pub.forEach(function(element){
                element.classList.remove("selected");
            });
            id_page_students.forEach(function(element){
                element.classList.remove("selected");
            });
        }

        if (window.location.pathname == "/publications.html") {
            id_page_home.forEach(function(element){
                element.classList.remove("selected");
            });
            id_page_pub.forEach(function(element){
                element.classList.add("selected");
            });
            id_page_students.forEach(function(element){
                element.classList.remove("selected");
            });
        }

        if (window.location.pathname == "/students.html") {
            id_page_home.forEach(function(element){
                element.classList.remove("selected");
            });
            id_page_pub.forEach(function(element){
                element.classList.remove("selected");
            });
            id_page_students.forEach(function(element){
                element.classList.add("selected");
            });
        }
    }
)
.then(() => {
    const hamburger_menu = document.querySelector("#hamburguer_button");
    const menu_down = document.querySelector("#hamburguer_menu_link");
    const nav_header = document.querySelector("#nav_id");
    const body = document.querySelector("#body_id");
    const header = document.querySelector("#header_id");
    const header_top_bar = document.querySelector("#header_top_bar")

    const hamburger_menu_projects = document.querySelector("#hamburguer_projects_button");
    const hamburguer_projects_link = document.querySelector("#hamburguer_projects_link");

    hamburger_menu.addEventListener("click", function (){

        if (hamburger_menu.classList.contains("open")) {
            hamburger_menu.classList.remove("open");
            menu_down.classList.add("header_menu_links_closed");
            header.classList.remove("header_remove_radius");
            header.classList.remove("header_show_down_menu");
            body.classList.remove("stop_scroll");
            header_top_bar.classList.remove("more_opacity");
        }
        else {
            hamburger_menu.classList.add("open");
            menu_down.classList.remove("header_menu_links_closed");
            header.classList.add("header_remove_radius");
            header.classList.add("header_show_down_menu");
            body.classList.add("stop_scroll");
            header_top_bar.classList.add("more_opacity");
        }
    });

    hamburger_menu_projects.addEventListener("click", function (){
        if (hamburger_menu_projects.classList.contains("open")) {
            hamburger_menu_projects.classList.remove("open");
            hamburguer_projects_link.classList.add("header_projects_links_closed");
            header_top_bar.classList.remove("more_opacity");
            // body.classList.remove("stop_scroll");
        }
        else {
            hamburger_menu_projects.classList.add("open");
            hamburguer_projects_link.classList.remove("header_projects_links_closed");
            header_top_bar.classList.add("more_opacity");
            // body.classList.add("stop_scroll");
        }
    });
})
.then(
    window.onload = function(){

        const id_hamb_project_burron = document.querySelector("#hamburguer_projects_link")
        const hamburguer_span_projects_button_1 = document.querySelector("#span_hamburguer_projects_button_1");
        const hamburguer_span_projects_button_2 = document.querySelector("#span_hamburguer_projects_button_2");
        const hamburguer_span_projects_button_3 = document.querySelector("#span_hamburguer_projects_button_3");
        const hamburguer_span_button_1 = document.querySelector("#span_hamburguer_button_1");
        const hamburguer_span_button_2 = document.querySelector("#span_hamburguer_button_2");
        const hamburguer_span_button_3 = document.querySelector("#span_hamburguer_button_3");
        const id_header_top_bar = document.querySelector("#id_header_top_bar");
        const menu_down = document.querySelector("#hamburguer_menu_link");
        const hamburger_menu = document.querySelector("#hamburguer_button");


        // project regnet
        if (window.location.pathname == "/projects/regnet/regnet.html"){
            const id = document.querySelectorAll("#go_regnet");
            id.forEach(function(element){
                element.classList.add("selected");
            });
        }

        // project bansac
        if (window.location.pathname == "/projects/bansac/bansac.html"){
            const id = document.querySelectorAll("#go_bansac");
            id.forEach(function(element){
                element.classList.add("selected");
            });
        }

        // project line intersect
        if (window.location.pathname == "/projects/ref_line_intersect/line_intersect.html"){
            const id = document.querySelectorAll("#go_reg_int_lines");
            id.forEach(function(element){
                element.classList.add("selected");
            });
        }

        if (project) {
            id_header_top_bar.classList.add("header_top_bar_project_color");
            menu_down.classList.add("header_projects_links_project_color");
            // hamburger_menu.classList.add("header_projects_links_project_color");
            hamburguer_span_projects_button_1.classList.add("change_color_span");
            hamburguer_span_projects_button_2.classList.add("change_color_span");
            hamburguer_span_projects_button_3.classList.add("change_color_span");
            hamburguer_span_button_1.classList.add("change_color_span");
            hamburguer_span_button_2.classList.add("change_color_span");
            hamburguer_span_button_3.classList.add("change_color_span");
            id_hamb_project_burron.classList.add("header_projects_links_project_color");
            if(ist) document.getElementById("institutional_logo").src="/figures/logo_ist_black.png";
            if(merl) document.getElementById("institutional_logo").src="/figures/merl_black.png";    
        }
    }
)