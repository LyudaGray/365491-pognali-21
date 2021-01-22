
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
    background.style.backgroundColor = "#161c35";

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

function myFunctionForm() {
  var x = document.getElementById("myMENU");
  var y = document.getElementById("menu-humb-cross");
  var z = document.getElementById("menu-humb");
  var logoNav = document.getElementById("page-header__logo-nav");
  var logo = document.getElementById("page-header__logo");
  var background = document.getElementById("form-header__wrap");

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

function myFunctionChoose() {
  var x = document.getElementById("myCountry");
  var y = document.getElementById("menu-btn-cross");
  var z = document.getElementById("menu-btn");
  var drop = document.getElementById("dropdown-menu__select");
  var dropText = document.getElementById("drop-text");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    y.style.color = "white";
    z.style.display = "none";
    drop.style.backgroundColor = "#1d2e5b";
    dropText.style.color = "white";

  } else {
    x.style.display = "none";
    y.style.display = "none";
    y.style.color = "#cccccc";
    z.style.display = "block";
    drop.style.backgroundColor = "white";
    dropText.style.color = "#1d2e5b";
  }
}

function myFunctionFiltr() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("menu-btn-cross");
  var z = document.getElementById("menu-btn");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";

  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function myFunctionClose() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}

function myFunctionCatalog() {
  var x = document.getElementById("myCatalogMenu");
  var y = document.getElementById("menu-humb-cross");
  var z = document.getElementById("menu-humb");
  var logoNav = document.getElementById("page-header__logo-nav");
  var logo = document.getElementById("page-header__logo");
  var background = document.getElementById("catalog-header__wrap");

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

//
// let siteHeader = document.querySelector(".site-header");
// let menuBtn = siteHeader.querySelector(".site-header__button--menu");
// let isUserMenu = document.querySelector(".user-menu");
// let filterCountry = document.querySelector(".filter-country");
// let filterBtnList = document.querySelectorAll(".filter__button--show");
// let businessRateOpen = document.querySelector(".add-profile__link--all");
// let businessRate = document.querySelector(".site-main__business-rate");
// let stepCountryOpen = document.querySelector(".step__input--add-country");
// let stepCountryClose = document.querySelector(".country__button--close");
// let stepCountry = document.querySelector(".step__country");
// let stepBtnDel = document.querySelectorAll(".step__button--del");
//
// window.addEventListener("scroll", function (evt) {
//   evt.preventDefault();
//   if (window.pageYOffset > 1) {
//     siteHeader.classList.add("site-header--scrolled");
//   } else {
//     siteHeader.classList.remove("site-header--scrolled");
//
//   }
//   if (window.pageYOffset > 23) {
//     siteHeader.classList.add("site-header--animation");
//   } else {
//     siteHeader.classList.remove("site-header--animation");
//   }
// });
//
// if (isUserMenu) {
//   siteHeader.classList.toggle("site-header--index-closed");
//   menuBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     siteHeader.classList.toggle("site-header--index-closed");
//   });
// } else {
//   siteHeader.classList.toggle("site-header--closed");
//   menuBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     siteHeader.classList.toggle("site-header--closed");
//   });
// }
//
// if (businessRate) {
//   let businessRateClose = businessRate.querySelector(".business-rate__button");
//
//   businessRateOpen.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     businessRate.classList.toggle("display-none");
//   });
//
//   businessRateClose.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     businessRate.classList.toggle("display-none");
//   });
// };
//
// if (stepCountry) {
//   stepCountryOpen.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     stepCountry.classList.toggle("display-none");
//     stepBtnDel[stepBtnDel.length - 1].classList.toggle("display-none");
//   });
//
//   stepCountryClose.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     stepCountry.classList.toggle("display-none");
//     stepBtnDel[stepBtnDel.length - 1].classList.toggle("display-none");
//   });
// };
//
// if (filterCountry) {
//   let filterCountryBtnOpen = filterCountry.querySelector(".filter-country__button--close");
//   let filterCountryBtnClose = filterCountry.querySelector(".filter-country__button--hide");
//   let filterCountryLetterList = filterCountry.querySelectorAll(".filter-country__letter-button");
//   let filterCountryList = filterCountry.querySelectorAll(".filter-country__list-wrap");
//   let filterCountryLetterItem = filterCountry.querySelectorAll(".filter-country__letter-item");
//
//   filterCountryBtnOpen.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     filterCountry.classList.toggle("filter-country--closed");
//   });
//
//   filterCountryBtnClose.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     filterCountry.classList.toggle("filter-country--closed");
//   });
//
//   let currentListShow = filterCountryList[0];
//   let currentActiveItem = filterCountryLetterItem[0];
//
//   for (let i = 0; i < filterCountryList.length; i++) {
//
//     let currentLetterBtn = filterCountryLetterList[i];
//     let currentCountryList = filterCountryList[i];
//     let currentCountryLetterItem = filterCountryLetterItem[i];
//
//     currentLetterBtn.addEventListener("click", function (evt) {
//       evt.preventDefault();
//
//       currentListShow.classList.toggle("filter-country__list-wrap--no-show");
//       currentCountryList.classList.toggle("filter-country__list-wrap--no-show");
//
//       currentActiveItem.classList.toggle("filter-country__letter-item--active");
//       currentCountryLetterItem.classList.toggle("filter-country__letter-item--active");
//
//       currentListShow = currentCountryList;
//       currentActiveItem = currentCountryLetterItem;
//     });
//   }
// }
//
// if (filterBtnList) {
//   let filterLabelWrapList = document.querySelectorAll(".filter__label-wrap");
//   let filterSVGList = document.querySelectorAll(".filter__icon--hide");
//   for (let i = 0; i < filterBtnList.length; i++) {
//
//     // Вынужденная мера из-за поддержки IE 11
//
//     let currentBtn = filterBtnList[i];
//     let currentLabelWrap = filterLabelWrapList[i];
//     let currentFilterSVGList = filterSVGList[i];
//
//     currentBtn.addEventListener("click", function (evt) {
//       evt.preventDefault();
//       currentLabelWrap.classList.toggle("filter__label-wrap--closed");
//       currentFilterSVGList.classList.toggle("filter__icon--rotated");
//     });
//   };
// };

//
// window.onscroll = function () {
//   myScroll()
// };
//
// var header = document.getElementById("page-header__wrapper");
// var logoNav = document.getElementById("page-header__logo-nav");
// var logo = document.getElementById("page-header__logo");
// var z = document.getElementById("menu-humb");
// var pages = document.getElementById("pages");
// var login = document.getElementById("user-login");
// //
// // var sticky = header.offsetTop;
//
// function myScroll() {
//   if (window.pageYOffset > 73) {
//     // header.classList.add("sticky");
//     header.classList.add('background');
//     logo.style.display = "none";
//     logoNav.style.display = "block";
//     z.setAttribute("style", "fill: #cccccc; stroke: #cccccc");
// pages.style.color = "#000000";
//
//   } else {
//     // header.classList.remove("sticky");
//     header.classList.remove('background');
//     logo.style.display = "block";
//     logoNav.style.display = "none";
//     z.setAttribute("style", "fill: white; stroke: white");
//
//   }
// }
