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