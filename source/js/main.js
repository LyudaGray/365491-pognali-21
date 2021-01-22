
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

