const itemsNav = document.querySelectorAll('.items-nav');
const btnOpenMenu = document.querySelector('.open-menu-btn');
const btnCloseMenu = document.querySelector('.close-menu-btn');

/* lista de navegação header */

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        const item = document.querySelector(`.items-nav[href="#${sectionId}"]`)
        if (entry.isIntersecting) {
            itemsNav.forEach((l) => {
                l.classList.remove('selected')
            })            
            item.classList.add('selected');
        }
    })
}, {threshold: 0.9})

const todoElements = document.querySelectorAll('.todo');
todoElements.forEach(el => observer.observe(el));

/* botões de menu mobile */

btnOpenMenu.addEventListener("click", () => {
    let hNavList = document.querySelector('.header-nav-list');

    /*hNavList.style.display = "flex"*/
    hNavList.classList.add("active");
    btnOpenMenu.classList.remove("visible");
    btnCloseMenu.classList.add("visible")
})

btnCloseMenu.addEventListener("click", () => {
    let hNavList = document.querySelector('.header-nav-list');

    /*hNavList.style.display = "flex"*/
    hNavList.classList.remove("active");
    btnOpenMenu.classList.add("visible");
    btnCloseMenu.classList.remove("visible")
})