$(document).ready(function () {

    // $(".progressOwn").bind("load",function () {
    //     this.classList.add("changeWidth"); 
    // });

    $('.progressOwn').on('inview', function (event, visible) {
        if (visible == true) {
            this.classList.add("changeWidth");
        }
    });


    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Home page ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    //Show and hide search bar
    $(".searchIcon").click(function () {
        $(".search").slideDown("slow");
    });

    $(".searchClose").click(function () {
        $(".search").slideUp("slow");
    });

    //Show and hide navbar submenu
    $(".subMenuLi").hover(function () {
        $(this).find("ul").slideDown(100);
    });

    $(".subMenuLi").mouseleave(function () {
        $(".subMenu").slideUp(100);
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
        $(".menuResponse").slideToggle(300);
    });

    //Show and hide responsive navbar submenus
    $(".menuResponse i").click(function () {
        var thisNext = $(this).next();
        if (thisNext.hasClass("hiden")) {
            this.classList.remove("fa-plus");
            this.classList.add("fa-minus");
            thisNext.slideToggle();
            thisNext.removeClass("hiden");
            thisNext.addClass("showen");
        } else {
            this.classList.remove("fa-minus");
            this.classList.add("fa-plus");
            thisNext.slideToggle();
            thisNext.removeClass("showen");
            thisNext.addClass("hiden");
        }
    });

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Causes page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    //making Progressbar dynamically
    var progressBar = $(".progressOwn").offset().top;
    var checked = false;

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();

        if (progressBar <= windowTop + 500 && !checked) {

            $('.progressOwn').each(function (index, value) {
                var progressBarOwn = $(this),
                    width = 0,
                    verilenWidth = $(value).text();
                $(this).text(verilenWidth + "%");

                var interval = setInterval(function () {
                    width += 3.5;
                    progressBarOwn.css({
                        "width": width + "%",
                        "color": "white",
                        "padding-right": "5px"
                    });
                    if (width >= verilenWidth) {
                        clearInterval(interval);
                    }
                }, 100)
            });
            checked = true;
        }
    })
});


/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Switching to native javascript  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Home page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

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



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pagination ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Pagination of cause grid menu
//Variables
var causeGridPaginationItems = document.getElementsByClassName("causeGridPagination");
var paginationCauseGridNav = document.getElementById("paginationCauseGridNav");
var itemNum = 6;
var pageCount = Math.ceil(causeGridPaginationItems.length / itemNum);

//Creating Prev button
var listLeft = document.createElement("li");
var iLeft = document.createElement("i");
iLeft.setAttribute("class", "fa fa-angle-double-left");
listLeft.appendChild(iLeft);
listLeft.addEventListener('click', paginationPrevCauseGrid);
paginationCauseGridNav.appendChild(listLeft);

//Creating Pages
for (var i = 0; i < pageCount; i++) {
    var list = document.createElement("li");
    list.innerHTML = (i + 1);
    list.setAttribute("data-index", (i + 1));
    if (i == 0) { list.classList.add("active"); }
    list.addEventListener('click', goToPage);
    paginationCauseGridNav.appendChild(list);
}

//Creating Next button
var listRight = document.createElement("li");
var iRight = document.createElement("i");
iRight.setAttribute("class", "fa fa-angle-double-right");
listRight.appendChild(iRight);
listRight.addEventListener('click', paginationNextCauseGrid);
paginationCauseGridNav.appendChild(listRight);

// Making page numbers dynamic
for (var j = 0; j < causeGridPaginationItems.length; j++) {
    causeGridPaginationItems[j].style.display = "none";
    if (0 <= j && j < 6) {
        causeGridPaginationItems[j].style.display = "block";
    }
}

function goToPage(e) {
    var pageNum = e.target.dataset.index;

    for (var j = 0; j < causeGridPaginationItems.length; j++) {
        causeGridPaginationItems[j].style.display = "none";

        if (((pageNum - 1) * itemNum) <= j && j < (pageNum * itemNum)) {
            causeGridPaginationItems[j].style.display = "block";
        }
    }

    var li = document.querySelectorAll("#paginationCauseGridNav li");
    for (var t = 0; t < (pageCount + 2); t++) {
        li[t].classList.remove("active");
    }
    li[pageNum].classList.add("active");
}

// Making Next button dynamic
function paginationNextCauseGrid() {
    var activePage = document.querySelector("#paginationCauseGridNav .active").dataset.index;
    var currentActivePage = parseInt(activePage) + 1;
    if (activePage == pageCount) { currentActivePage = pageCount; activePage -= 1; }
    var itemStart = activePage * 6;
    var itemEnd = itemStart + 6;

    for (var j = 0; j < causeGridPaginationItems.length; j++) {
        causeGridPaginationItems[j].style.display = "none";
        if (itemStart <= j && j < itemEnd) {
            causeGridPaginationItems[j].style.display = "block";
        }
    }

    var li = document.querySelectorAll("#paginationCauseGridNav li");
    for (var t = 0; t < (pageCount + 2); t++) {
        li[t].classList.remove("active");
    }
    li[currentActivePage].classList.add("active");
}

// Making Prev button dynamic
function paginationPrevCauseGrid() {
    var activePage = document.querySelector("#paginationCauseGridNav .active").dataset.index;
    var currentActivePage = parseInt(activePage) - 1;
    if (activePage == 1) { currentActivePage = 1; activePage = 1; }
    
    var itemEnd = currentActivePage * 6;
    var itemStart = itemEnd - 6;

    for (var j = 0; j < causeGridPaginationItems.length; j++) {
        causeGridPaginationItems[j].style.display = "none";
        if (itemStart <= j && j < itemEnd) {
            causeGridPaginationItems[j].style.display = "block";
        }
    }

    var li = document.querySelectorAll("#paginationCauseGridNav li");
    for (var t = 0; t < (pageCount + 2); t++) {
        li[t].classList.remove("active");
    }
    li[currentActivePage].classList.add("active");
}




/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Causes page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Causes single menu Paypal/Visa Master Card section

var tab_link = document.getElementsByClassName('single-cause-pay-tab-link');
var tab_items = document.getElementsByClassName('single-cause-pay-tab-item');

function myFunc(event) {

    var index = event.target.attributes[1].value;

    //removing active class from all elements
    for (j = 0; j < tab_link.length; j++) {
        tab_link[j].classList.remove('active');
        tab_items[j].classList.remove('active');
    }
    //adding active class to all elements
    event.target.classList.add('active');

    //Setting interval for display
    var interval = setInterval(function () {
        for (k = 0; k < tab_items.length; k++) {
            tab_items[k].style.display = 'none';
        }
        document.querySelector('.single-cause-pay-tab-item[data-tab-item="' + index + '"]').style.display = 'block';
    }, 700);

    //clearing interval
    setTimeout(function () {
        clearInterval(interval);
        document.querySelector('.single-cause-pay-tab-item[data-tab-item="' + index + '"]').classList.add('active');
    }, 700);
}

for (i = 0; i < tab_link.length; i++) {
    tab_link[i].addEventListener('click', myFunc)
}

for (i = 0; i < tab_link.length; i++) {
    tab_link[i].setAttribute('data-tab-link', i);
    tab_items[i].setAttribute('data-tab-item', i);
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Gallery page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


//Making slider

//Defining of variables
var images = ["img/gallery/img-1.jpg", "img/gallery/img-2.jpg", "img/gallery/img-3.jpg", "img/gallery/img-19.jpg", "img/gallery/img-14.jpg", "img/gallery/img-15.jpg", "img/gallery/img-16.jpg", "img/gallery/img-17.jpg", "img/gallery/img-18.jpg", "img/gallery/need.jpg"];
var image = document.querySelector("#gallery-slider .imageWrapper .image");
var i;
var clickedImage;
var imageItems = document.querySelectorAll("#gallery-slide-image .galleryImage .overlay");

//Function show clicked image
for (var j = 0; j < imageItems.length; j++) {
    imageItems[j].addEventListener('click', showImage)
}

function showImage(e) {
    clickedImage = e.target.previousElementSibling.getAttribute("src");
    image.setAttribute("src", clickedImage);
    gallerySlider.style.display = "block";
    i = images.indexOf(clickedImage);
}


//Creating dynamic next and prev functions 

function next() {
    if (i == images.length - 1) {
        i = -1;
    }
    i++;
    image.setAttribute("src", images[i]);
    console.log(i, images.length);
}
function prev() {
    if (i == 0) {
        i = images.length;
    }
    i--;
    image.setAttribute("src", images[i]);
    console.log(i);
}


//Hide gallery slider

var gallerySlider = document.getElementById('gallery-slider');
function closeGallerySlider() {
    gallerySlider.style.display = "none";
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Blog page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Making slider for blog item

var blogItemImagesArray = ["img/blog/img-5.jpg", "img/blog/img-4.jpg", "img/blog/img-6.jpg"];
var blogItemSlider = document.getElementById("#blogItemSlider");
var currentImage = document.querySelector("#blogItemSlider .itemImage img");
var currentImageIndex;
var imageNavs = document.querySelector("#blogItemSlider .itemImage .navs");

//Create nav for all images
for (var i = 0; i < blogItemImagesArray.length; i++) {
    var navItem = document.createElement("div");
    navItem.setAttribute("class", "navItem");
    navItem.setAttribute("data-index", i);
    navItem.addEventListener('click', navControl);
    imageNavs.appendChild(navItem);
}

//Add active class to first image
var navItems = document.querySelectorAll("#blogItemSlider .itemImage .navs .navItem");
navItems[0].classList.add("active");

//Positioning of navControls
var blogItemSliderWidth = currentImage.width;
var imageNavsWidth = 18 * blogItemImagesArray.length;
imageNavs.style.left = ((blogItemSliderWidth - imageNavsWidth) / 2) + "px";

function blogListSliderPositioning() {
    var blogItemSliderWidth = currentImage.width;
    var imageNavsWidth = 18 * blogItemImagesArray.length;
    imageNavs.style.left = ((blogItemSliderWidth - imageNavsWidth) / 2) + "px";
    console.log("jsdb");
}

//Controling images via navControls
function navControl(e) {
    indexOfImage = e.target.dataset.index;
    currentImage.setAttribute("src", blogItemImagesArray[indexOfImage]);
    for (var i = 0; i < blogItemImagesArray.length; i++) {
        navItems[i].classList.remove("active");
    }
    navItems[indexOfImage].classList.add("active");
}

//Go to next image
function blogSingleNext() {
    currentImageIndex = parseInt(document.querySelector("#blogItemSlider .itemImage .navs .active").dataset.index);
    if (currentImageIndex == (blogItemImagesArray.length - 1)) {
        indx = 0;
    }
    else {
        var indx = (currentImageIndex + 1);
    }
    currentImage.setAttribute("src", blogItemImagesArray[indx]);
    for (var i = 0; i < blogItemImagesArray.length; i++) {
        navItems[i].classList.remove("active");
    }
    navItems[indx].classList.add("active");
}

//Go to previous image
function blogSinglePrev() {
    currentImageIndex = parseInt(document.querySelector("#blogItemSlider .itemImage .navs .active").dataset.index);
    if (currentImageIndex == 0) {
        indx = parseInt(blogItemImagesArray.length - 1);
    }
    else {
        var indx = (currentImageIndex - 1);
    }

    currentImage.setAttribute("src", blogItemImagesArray[indx]);
    for (var i = 0; i < blogItemImagesArray.length; i++) {
        navItems[i].classList.remove("active");
    }
    navItems[indx].classList.add("active");
}














/*

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
*/