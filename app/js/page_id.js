const id_page_home = document.querySelectorAll("#go_home");
const id_page_pub = document.querySelectorAll("#go_publications");
const id_page_students = document.querySelectorAll("#go_students");

window.onload = function(){

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
