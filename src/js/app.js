import '../scss/app.scss';

// Toggle menu

const menuBurger = document.querySelector(".header__burger");
const user = document.querySelectorAll(".header__icon");
const nav = document.querySelector(".menu");
const navUser = document.querySelector(".header__user");
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
if (menuBurger) {
    menuBurger.addEventListener("click", function (e) {
        menuBurger.classList.toggle("active");
        nav.classList.toggle("active");
        sidebar.classList.toggle("active");
        body.classList.toggle("lock");
        if (navUser.classList.contains("active")) {
            body.classList.remove("lock");
            menuBurger.classList.remove("active");
            navUser.classList.remove("active")
            nav.classList.remove("active");
            sidebar.classList.remove("active");
        }
    });
}

if (user) {
    user.forEach(item  => {
        item.addEventListener("click", function (e) {
            menuBurger.classList.toggle("active");
            navUser.classList.add("active")
            body.classList.add("lock");
            if (!menuBurger.classList.contains("active")) {
                menuBurger.classList.add("active")
                sidebar.classList.remove("active");
            }
        })
    })

}

