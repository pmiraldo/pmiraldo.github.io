const id_page_home = document.querySelector("#go_home");
const id_page_pub = document.querySelector("#go_publications");
const id_page_students = document.querySelector("#go_students");
const id_page_home_down = document.querySelector("#go_home_down");
const id_page_pub_down = document.querySelector("#go_publications_down");
const id_page_students_down = document.querySelector("#go_students_down");

window.onload = function(){

    if (window.location.pathname == "/index.html" || window.location.pathname == "/" ) {
        id_page_home.classList.add("selected");
        id_page_pub.classList.remove("selected");
        id_page_students.classList.remove("selected");
        id_page_home_down.classList.add("selected");
        id_page_pub_down.classList.remove("selected");
        id_page_students_down.classList.remove("selected");
    }

    if (window.location.pathname == "/publications.html") {
        id_page_home.classList.remove("selected");
        id_page_pub.classList.add("selected");
        id_page_students.classList.remove("selected");
        id_page_home_down.classList.remove("selected");
        id_page_pub_down.classList.add("selected");
        id_page_students_down.classList.remove("selected");
    }

    if (window.location.pathname == "/students.html") {
        id_page_home.classList.remove("selected");
        id_page_pub.classList.remove("selected");
        id_page_students.classList.add("selected");
        id_page_home_down.classList.remove("selected");
        id_page_pub_down.classList.remove("selected");
        id_page_students_down.classList.add("selected");
    }
}