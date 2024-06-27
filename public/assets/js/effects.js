const hamburger = document.querySelector("#burger");
const items = document.querySelector("#menu-items");

$(hamburger).on("click",function openMobileMenu() {

hamburger.classList.toggle("open");
items.classList.toggle("mobile-nav");

});
