const menuBtn = document.querySelector('.menu_btn')

const navLinks = document.querySelector('.nav_links')

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
})