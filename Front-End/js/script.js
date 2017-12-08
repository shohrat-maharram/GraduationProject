$(document).ready(function () {


    //Show and hide search bar
    $(".searchIcon").click(function () {
        $(".search").show("slow");
    });

    $(".searchClose").click(function () {
        $(".search").hide("slow");
    });

    //Show and hide navbar submenu
    $(".subMenuLi").hover(function () {
        $(this).find("ul").show(300);
    });

    $(".subMenuLi").mouseleave(function () {
        $(".subMenu").hide("slow");
    });

    //Show and hide responsive navbar menu
    $(".navMenuSmallTitle .searchIconSmall i").click(function () {
        if (this.classList.contains("fa-bars")) {
            this.classList.remove("fa-bars");
            this.classList.add("fa-times");
        } else {
            this.classList.remove("fa-times");
            this.classList.add("fa-bars");
        }
        $(".menuResponse").toggle("slow");
    });

    //Show and hide responsive navbar submenus
    $(".menuResponse i").click(function () {
        var thisNext = $(this).next();
        if (thisNext.hasClass("hiden")) {
            this.classList.remove("fa-plus");
            this.classList.add("fa-minus");
            thisNext.show();
            thisNext.removeClass("hiden");
            thisNext.addClass("showen");
        } else {
            this.classList.remove("fa-minus");
            this.classList.add("fa-plus");
            thisNext.hide();
            thisNext.removeClass("showen");
            thisNext.addClass("hiden");
        }
        // $(".menuResponse").toggle("slow");
    });

});


//Switching to native javascript
//Add active class to the active page`
var pageTabs = document.getElementsByClassName("pageTabs");
function activeTab(elem) {
    for (var i = 0; i < pageTabs.length; i++) {
        if (elem != pageTabs[i]) {
            pageTabs[i].classList.remove("active");
        } else {
            if (elem.classList.contains("child")) {
                elem.parentElement.parentElement.previousElementSibling.classList.add("active");
            }
            else {
                pageTabs[i].classList.add("active");
            }
        }
    }
}