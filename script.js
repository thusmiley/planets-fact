const ham = document.querySelector(".icon-ham");
const mobileMenu = document.getElementById("mobile-menu");
function openNav() {
    ham.addEventListener('click', () => {
        mobileMenu.classList.add('active')
        ham.style.opacity = '0.5';
    })
}