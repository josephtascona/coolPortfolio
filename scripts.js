function showHoverItem(index) {
    document.querySelectorAll('.hoverItem')[index].style.display = "block";
}

function hideHoverItem(index) {
    document.querySelectorAll('.hoverItem')[index].style.display = "none";
}

window.onload = function () {
    document.querySelector('.main').style.display = "grid";
    document.querySelector('.loader').style.display = "none";
}