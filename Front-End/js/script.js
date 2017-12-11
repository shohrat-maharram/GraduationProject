$(document).ready(function () {

    /*  ~~~~~~~~~~~~~~~~~~~~~ Home page ~~~~~~~~~~~~~~~~~~~~~ */
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

    /*  ~~~~~~~~~~~~~~~~~~~~~ Causes page  ~~~~~~~~~~~~~~~~~~~~~ */



});





/*  ~~~~~~~~~~~~~~~~~~~~~ Switching to native javascript  ~~~~~~~~~~~~~~~~~~~~~ */


/*  ~~~~~~~~~~~~~~~~~~~~~ Home page  ~~~~~~~~~~~~~~~~~~~~~ */

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



// Creating slider
// Images which is used in slider
var slidePic = ["img/slides/s1.jpg", "img/slides/s2.jpg", "img/slides/s3.jpg"];

// Creating slider frame
var slider = document.querySelector("#sliderDiv");
var sliderFrame = document.createElement("div");
sliderFrame.setAttribute("class", "sliderFrame");
slider.appendChild(sliderFrame);

// Creating roundForm nav
var nextDiv = document.createElement("div");
nextDiv.setAttribute("class", "nextDiv");
sliderFrame.appendChild(nextDiv);
nextDiv.style.height = (20 * slidePic.length) + "px";
var heightVP = document.documentElement.clientHeight
nextDiv.style.top = ((heightVP - (20 * slidePic.length)) / 2) + "px";

// Creating slides content
var slidesDiv = document.createElement("div");
slidesDiv.setAttribute("class", "slidesDiv");
sliderFrame.appendChild(slidesDiv);
// slidesDiv.style.width = (1200 * slidePic.length) + "px";

var widthVP;
window.addEventListener("resize", function (event) {
    var widthVP = document.body.clientWidth;
})
console.log(widthVP);
// Embedding pics
for (i = 0; i < slidePic.length; i++) {
    var slideDiv = document.createElement("div");
    slideDiv.setAttribute("class", "slideDiv");
    slideDiv.style.backgroundImage = "url(" + slidePic[i] + ")";
    var widthVP = document.documentElement.clientWidth;
    slideDiv.style.width = (widthVP) + "px";
    slidesDiv.appendChild(slideDiv);

    var nextRound = document.createElement("div");
    nextRound.setAttribute("class", "nextRound");
    nextRound.setAttribute("data-index", i);
    nextRound.addEventListener("click", get_data_index);
    nextDiv.appendChild(nextRound);
}

// Get index of round Navs
var nextRound_index = document.getElementsByClassName("nextRound");
nextRound_index[0].style.backgroundColor = "#de1219";

// Make slider dinamic
var index = 0;
function changeSlide() {
    if (index < slidePic.length) {
        for (j = 0; j < slidePic.length; j++) {
            nextRound_index[j].style.backgroundColor = "white";
        }
        slidesDiv.style.left = (-index * widthVP) + "px";
        nextRound_index[index].style.backgroundColor = "#de1219";
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
        nextRound_index[j].style.backgroundColor = "white";
    }
    // alert(slidePic[data_index])
    nextRound_index[data_index].style.backgroundColor = "#de1219";
    slidesDiv.style.left = (-data_index * widthVP) + "px";

}