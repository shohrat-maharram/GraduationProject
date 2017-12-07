$(document).ready(function () {


    //Show and hide search bar
    $(".searchIcon").click(function () {
        $(".search").show("slow");
    });

    $(".searchClose").click(function () {
        $(".search").hide("slow");
    });

    $(".subMenuLi").hover(function () {
        $(this).find("ul").show(300);
    });
    
    $(".subMenuLi").mouseleave(function () {
        $(".subMenu").hide("slow");
    });
});


//Switching to native javascript
//Add active class to the active page
var pageTabs = document.getElementsByClassName("pageTabs");
function activeTab(elem) {  
    for (var i = 0; i < pageTabs.length; i++) {
        if (elem != pageTabs[i]) {
            pageTabs[i].classList.remove("active");
        } else {
            pageTabs[i].classList.add("active");
        }
    }
}