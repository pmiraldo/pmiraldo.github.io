const id_regnet = document.querySelectorAll("#go_regnet");

window.onload = function(){

    if (window.location.pathname == "/projects/regnet/regnet.html" || window.location.pathname == "/" ) {
        id_regnet.forEach(function(element){
            element.classList.add("selected");
        });
    }

}