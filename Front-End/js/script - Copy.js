//copi of pagination
var causeGridExist = document.getElementsByClassName("causeGridExist");
if (causeGridExist.length > 0) {
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
    listLeft.addEventListener('click', function () {
        var direction = "backward";
        paginationNextCauseList(direction);
    });
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
    listRight.addEventListener('click', function () {
        var direction = "forward";
        paginationNextCauseList(direction);
    });
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
    function paginationNextCauseList(param) {
        var activePage = document.querySelector("#paginationCauseListNav .active").dataset.index;
        //Make desition to choosing go forward or backward
        if (param == "forward") {
            var currentActivePage = parseInt(activePage) + 1;
            if (activePage == pageCountCauseList) { currentActivePage = pageCountCauseList; activePage -= 1; }
            var itemStart = activePage * itemNumCauseList;
            var itemEnd = itemStart + itemNumCauseList;
        } else if (param == "backward") {
            var currentActivePage = parseInt(activePage) - 1;
            if (activePage == 1) { currentActivePage = 1; activePage = 1; }
            var itemEnd = currentActivePage * itemNumCauseList;
            var itemStart = itemEnd - itemNumCauseList;
        }

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








/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Paginations ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Pagination of Cause grid, Cause List and Blog List menu
//Variables
var causeGridExist = document.getElementsByClassName("causeGridExist");
var blogListExist = document.getElementsByClassName("blogListExist");
var causeListExist = document.getElementsByClassName("causeListExist");
/*
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
}*/