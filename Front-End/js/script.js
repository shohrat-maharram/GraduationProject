$(document).ready(function () {

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Home page ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    var homeExist = $(".homeExist");
    if (homeExist.length > 0) {
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
    }


    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Causes page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    var causeGridExist = $(".causeGridExist");
    var causeListExist = $(".causeListExist");
    var causeSingleExist = $(".causeSingleExist");
    if (causeGridExist.length > 0 || causeListExist.length > 0 || causeSingleExist.length > 0) {
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
    }
});



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Switching to native javascript  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Paginations ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Pagination of Cause grid, Cause List and Blog List menu
//Variables
var causeGridExist = document.getElementsByClassName("causeGridExist");
var blogListExist = document.getElementsByClassName("blogListExist");
var causeListExist = document.getElementsByClassName("causeListExist");

if (blogListExist.length > 0 || causeListExist.length > 0 || causeGridExist.length > 0) {
    var causeListPaginationItems = document.getElementsByClassName("causeListPagination");
    var paginationCauseListNav = document.getElementById("paginationCauseListNav");
    if (blogListExist.length > 0 || causeListExist.length > 0) {
        var itemNumCauseList = 3;
    }
    else if (causeGridExist.length > 0) {
        var itemNumCauseList = 6;
    }

    var pageCountCauseList = Math.ceil(causeListPaginationItems.length / itemNumCauseList);

    //Creating Prev button
    var listLeft = document.createElement("li");
    var iLeft = document.createElement("i");
    iLeft.setAttribute("class", "fa fa-angle-double-left");
    listLeft.appendChild(iLeft);
    listLeft.addEventListener('click', paginationPrevCauseList);
    paginationCauseListNav.appendChild(listLeft);

    //Creating Pages
    for (var i = 0; i < pageCountCauseList; i++) {
        var list = document.createElement("li");
        list.innerHTML = (i + 1);
        list.setAttribute("data-index", (i + 1));
        if (i == 0) { list.classList.add("active"); }
        list.addEventListener('click', goToPage);
        paginationCauseListNav.appendChild(list);
    }

    //Creating Next button
    var listRight = document.createElement("li");
    var iRight = document.createElement("i");
    iRight.setAttribute("class", "fa fa-angle-double-right");
    listRight.appendChild(iRight);
    listRight.addEventListener('click', paginationNextCauseList);
    paginationCauseListNav.appendChild(listRight);

    // Making page numbers dynamic
    for (var j = 0; j < causeListPaginationItems.length; j++) {
        causeListPaginationItems[j].style.display = "none";
        if (0 <= j && j < itemNumCauseList) {
            causeListPaginationItems[j].style.display = "block";
        }
    }

    function goToPage(e) {
        var pageNum = e.target.dataset.index;

        for (var j = 0; j < causeListPaginationItems.length; j++) {
            causeListPaginationItems[j].style.display = "none";

            if (((pageNum - 1) * itemNumCauseList) <= j && j < (pageNum * itemNumCauseList)) {
                causeListPaginationItems[j].style.display = "block";
            }
        }

        var li = document.querySelectorAll("#paginationCauseListNav li");
        for (var t = 0; t < (pageCountCauseList + 2); t++) {
            li[t].classList.remove("active");
        }
        li[pageNum].classList.add("active");
    }

    // Making Next button dynamic
    function paginationNextCauseList() {
        var activePage = document.querySelector("#paginationCauseListNav .active").dataset.index;
        var currentActivePage = parseInt(activePage) + 1;
        if (activePage == pageCountCauseList) { currentActivePage = pageCountCauseList; activePage -= 1; }
        var itemStart = activePage * itemNumCauseList;
        var itemEnd = itemStart + itemNumCauseList;

        for (var j = 0; j < causeListPaginationItems.length; j++) {
            causeListPaginationItems[j].style.display = "none";
            if (itemStart <= j && j < itemEnd) {
                causeListPaginationItems[j].style.display = "block";
            }
        }

        var li = document.querySelectorAll("#paginationCauseListNav li");
        for (var t = 0; t < (pageCountCauseList + 2); t++) {
            li[t].classList.remove("active");
        }
        li[currentActivePage].classList.add("active");
    }

    // Making Prev button dynamic
    function paginationPrevCauseList() {
        var activePage = document.querySelector("#paginationCauseListNav .active").dataset.index;
        var currentActivePage = parseInt(activePage) - 1;
        if (activePage == 1) { currentActivePage = 1; activePage = 1; }

        var itemEnd = currentActivePage * itemNumCauseList;
        var itemStart = itemEnd - itemNumCauseList;

        for (var j = 0; j < causeListPaginationItems.length; j++) {
            causeListPaginationItems[j].style.display = "none";
            if (itemStart <= j && j < itemEnd) {
                causeListPaginationItems[j].style.display = "block";
            }
        }

        var li = document.querySelectorAll("#paginationCauseListNav li");
        for (var t = 0; t < (pageCountCauseList + 2); t++) {
            li[t].classList.remove("active");
        }
        li[currentActivePage].classList.add("active");
    }
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Home page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Add active class to the active page / Header
var homeExist = document.getElementsByClassName("homeExist");

if (homeExist.length > 0) {
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


    //Creating first Slider of home page
    var slideItems = document.getElementsByClassName("slideItems");
    var controlItems = document.getElementsByClassName("controlItem");
    var heading = document.querySelector("#slider .overlay h1");
    var paragraph = document.querySelector("#slider .overlay p");
    var link = document.querySelector("#slider .overlay a");
    var ControlsDataIndex;

    function dynamicContent() {
        heading.style.top = "0px";
        heading.style.opacity = "1";
        paragraph.style.top = "0px";
        paragraph.style.opacity = "1";
        link.style.top = "0px";
        link.style.opacity = "1";
    }
    window.onload = dynamicContent;

    function changeSlide(e) {
        for (var i = 0; i < slideItems.length; i++) {
            slideItems[i].style.display = "none"
            controlItems[i].classList.remove("active");
        }
        ControlsDataIndex = e.dataset.index;
        slideItems[(ControlsDataIndex - 1)].style.display = "block"
        controlItems[(ControlsDataIndex - 1)].classList.add("active");

    }
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Causes page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Causes single menu 
//Paypal/Visa Master Card section
var causeSingleExist = document.getElementsByClassName('causeSingleExist');

if (causeSingleExist.length > 0) {
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
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Gallery page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Making slider
var galleryExist = document.getElementsByClassName('galleryExist');
if (galleryExist.length > 0) {
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
}



/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Blog page  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Blog list menu
//Making slider for blog item
var blogListExist = document.getElementsByClassName('blogListExist');
if (blogListExist.length > 0) {
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
}