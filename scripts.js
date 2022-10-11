function showHoverItem(index) {
    document.querySelectorAll('.hoverItem')[index].style.display = "block";
}

function hideHoverItem(index) {
    setTimeout(function() {
        document.querySelectorAll('.hoverItem')[index].style.display = "none";
    }, 370)
}

window.onload = function () {
    document.querySelector('.main').style.display = "grid";
    document.querySelector('.loader').style.display = "none";
}