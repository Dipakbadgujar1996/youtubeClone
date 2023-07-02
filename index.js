var menu = document.querySelector(".menu")
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menu.onclick = function(){
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}
