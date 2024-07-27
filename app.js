const full_year = new Date().getFullYear()
const copyright_year = document.getElementById("copyright_year")

copyright_year.innerHTML = full_year


const hambar = document.getElementById("hambar_icon")

hambar.addEventListener("click", (e) => {

    const responsive_menu = document.querySelector(".responsive_menu")
    responsive_menu.style.display = "block"

    e.preventDefault()
})


const cross = document.getElementById("cross")

cross.addEventListener("click", () => {
    const responsive_menu = document.querySelector(".responsive_menu")
    responsive_menu.style.display = "none"
})




let sections = document.querySelectorAll(".active_section")
let navLinks = document.querySelectorAll(".nav-item")


window.addEventListener('scroll', () => {
        let current = '';
    
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop 
            - section.clientHeight / 3) {
                current = section.getAttribute('id');
            }
        });
    
        navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});