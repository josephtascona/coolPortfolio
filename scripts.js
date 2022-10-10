function showHoverItem(index) {
    document.querySelectorAll('.hoverItem')[index].style.display = "block";
}

function hideHoverItem(index) {
    setTimeout(function() {
        document.querySelectorAll('.hoverItem')[index].style.display = "none";
    }, 370)
}

function mobileNavbar() {
    var x = document.querySelector(".links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}