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
        if (elem != socialLinks[i]) {

        } else {
            socialLinks[i].style.backgroundColor = "white";
            socialLinks[i].style.width = "70px";
            socialLinks[i].style.color = "#de1219";

            if (socialLinks[i].id == "facebook") {
                socialLinks[i].textContent += " Facebook";
            }
            else if (socialLinks[i].id == "linkedin") {
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

// Creating slider
// Images which is used in slider
var slidePic = ["images/slide-hotel-1.jpg", "images/slide-hotel-2.jpg", "images/slide-hotel-3.jpg", "images/slide-hotel-1.jpg", "images/slide-hotel-2.jpg"];

// Creating slider frame
var slider = document.querySelector("#slider");
var sliderFrame = document.createElement("div");
sliderFrame.setAttribute("class", "sliderFrame");
slider.appendChild(sliderFrame);

// Creating roundForm nav
var nextDiv = document.createElement("div");
nextDiv.setAttribute("class", "nextDiv");
sliderFrame.appendChild(nextDiv);
nextDiv.style.width = (20 * slidePic.length) + "px";
nextDiv.style.left = ((1200 - (20 * slidePic.length)) / 2) + "px";

// Creating slides content
var slidesDiv = document.createElement("div");
slidesDiv.setAttribute("class", "slidesDiv");
sliderFrame.appendChild(slidesDiv);
slidesDiv.style.width = (1200 * slidePic.length) + "px";

// Embedding pics
for (i = 0; i < slidePic.length; i++) {
    var slideDiv = document.createElement("div");
    slideDiv.setAttribute("class", "slideDiv");
    slidesDiv.appendChild(slideDiv);

    var pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.setAttribute("src", slidePic[i]);
    slideDiv.appendChild(pic);

    var nextRound = document.createElement("div");
    nextRound.setAttribute("class", "nextRound");
    nextRound.setAttribute("data-index", i);
    nextRound.addEventListener("click", get_data_index);
    nextDiv.appendChild(nextRound);
}

// Get index of round Navs
var nextRound_index = document.getElementsByClassName("nextRound");
nextRound_index[0].style.backgroundColor = "white";

// Make slider dinamic
var index = 0;
function changeSlide() {
    if (index < slidePic.length) {
        for (j = 0; j < slidePic.length; j++) {
            nextRound_index[j].style.backgroundColor = "transparent";
        }
        slidesDiv.style.left = -index * 1200 + "px";
        nextRound_index[index].style.backgroundColor = "white";
        index++;
    } else {
        slidesDiv.style.left = -index * 0 + "px";
        index = 0;
    }
}
setInterval(changeSlide, 6000)

// Making round Navs dinamic
function get_data_index(e) {
    data_index = e.target.getAttribute("data-index");
    for (j = 0; j < slidePic.length; j++) {
        nextRound_index[j].style.backgroundColor = "transparent";
    }
    nextRound_index[data_index].style.backgroundColor = "white";
    slidesDiv.style.left = -data_index * 1200 + "px";

}