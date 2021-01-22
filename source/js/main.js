
function myFunction() {
  var x = document.getElementById("myMENU");
  var y = document.getElementById("menu-humb-cross");
  var z = document.getElementById("menu-humb");
  var logoNav = document.getElementById("page-header__logo-nav");
  var logo = document.getElementById("page-header__logo");
  var background = document.getElementById("page-header__wrapper");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
    logo.style.display = "none";
    logoNav.style.display = "block";
    background.style.backgroundColor = "#ffffff";

  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    logo.style.display = "block";
    logoNav.style.display = "none";
    background.style.backgroundColor = "#182044";

  }
}



function myTariffsShow() {
  let tariffs = document.getElementById("myTariffs");
  if (tariffs.style.display === "none") {
    tariffs.style.display = "block";
  } else {
    tariffs.style.display = "none";
  }
}

function myTariffsHide() {
  let tariffs = document.getElementById("myTariffs");
  if (tariffs.style.display === "block") {
    tariffs.style.display = "none";
  } else {
    tariffs.style.display = "block";
  }
}



window.onscroll = function () {
  myScroll()
};

var header = document.getElementById("page-header__wrapper");
var logoNav = document.getElementById("page-header__logo-nav");
var logo = document.getElementById("page-header__logo");
var z = document.getElementById("menu-humb");
var pages = document.getElementById("pages-list");
var sticky = header.offsetTop;

function myScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add('background');
    logo.style.display = "none";
    logoNav.style.display = "block";
    z.setAttribute("style", "fill: #cccccc; stroke: #cccccc");
    pages.style.color = "#192144";
  } else {
    header.classList.remove("sticky");
    header.classList.remove('background');
    logo.style.display = "block";
    logoNav.style.display = "none";
    z.setAttribute("style", "fill: white; stroke: white");
    pages.style.color = "#192144";
  }
}
