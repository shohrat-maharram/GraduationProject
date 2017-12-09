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
            if (elem.classList.contains("child")) {
                elem.parentElement.parentElement.previousElementSibling.classList.add("active");
            }
            else {
                pageTabs[i].classList.add("active");
            }
        }
    }
}

//Add active class to the active page
var socialLinks = document.getElementsByClassName("socialLinks");
function changeContent(elem) {
    for (var i = 0; i < socialLinks.length; i++) {
        if (elem != socialLinks[i]){
            
        }else{
            socialLinks[i].style.backgroundColor = "white";
            socialLinks[i].style.width = "70px";
            socialLinks[i].style.color = "#de1219";

            if (socialLinks[i].id=="facebook"){
                socialLinks[i].textContent += " Facebook";
            }
            else if (socialLinks[i].id == "linkedin"){
                socialLinks[i].textContent += " Linkedin";
            } else if (socialLinks[i].id == "google") {
                socialLinks[i].textContent += " Google";
            } else if (socialLinks[i].id == "twitter") {
                socialLinks[i].textContent += " Twitter";
            } else if (socialLinks[i].id == "skype") {
                socialLinks[i].textContent += " Skype";
            }       
        }
    }
}

function resetContent(elem) {
    for (var i = 0; i < socialLinks.length; i++) {
        socialLinks[i].textContent = "";
        socialLinks[i].style.backgroundColor = "#292b2f";
        socialLinks[i].style.width = "30px";
        socialLinks[i].style.color = "white";
    }
}