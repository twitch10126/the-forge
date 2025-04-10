/* jshint esversion: 11 */

// Taken from Boardwalk games project 
document
.querySelectorAll(".navbar-collapse .nav-link")
.forEach((link) => {
    link.addEventListener("click", function (e) {
        let section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
            e.preventDefault(); // Prevent default anchor click behavior
            let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
            window.scroll({
                top: section.offsetTop - navbarHeight, // Adjust for navbar height
                behavior: "smooth",
            });
            document
                .querySelector(".navbar-collapse")
                .classList.remove("show"); // Collapse navbar
        }
    });
});
