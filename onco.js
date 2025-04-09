let sidebar = document.getElementById('menu-button');
let sidebarcontainer = document.getElementsByClassName('sidebar-container')[0];
let main = document.getElementsByClassName('main')[0];
sidebar.addEventListener('click', function() {
    sidebarcontainer.classList.toggle('active');
    main.classList.toggle('blur');
});


document.getElementsByClassName('Exp-btn')[0].addEventListener('click', function() { 
    document.getElementsByClassName('categories')[0].scrollIntoView({ behavior: 'smooth' });
});

let scrolled = document.getElementsByClassName('sub-category-list')[0];
let leftButton = document.getElementsByClassName('left-button')[0];
let rightButton = document.getElementsByClassName('right-button')[0];
leftButton.addEventListener('click', () => {
    scrolled.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    scrolled.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
let courseCategory = document.getElementsByClassName('courses')[0];
let leftButton2 = document.getElementsByClassName('leftb')[0];
let rightButton2 = document.getElementsByClassName('rightb')[0];
leftButton2.addEventListener('click', () => {
    courseCategory.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightButton2.addEventListener('click', () => {
    courseCategory.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});



const mainLinks = document.querySelectorAll('.main-categories li a');
const indicator = document.querySelector('.indicator');
const subCategoryLists = document.querySelectorAll('.sub-category-list');

function moveIndicator(target) {
    const parentRect = target.closest('.category-nav').getBoundingClientRect(); // Fix parent reference
    const rect = target.getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - parentRect.left}px`;
}

function showSubCategory(category) {
    subCategoryLists.forEach(list => {
        list.style.display = list.classList.contains(category) ? 'flex' : 'none';
    });
}

mainLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        moveIndicator(link);
        const category = link.getAttribute('data-category');
        showSubCategory(category);
    });
});

// Initialize first category
window.addEventListener('DOMContentLoaded', () => {
    if (mainLinks.length > 0) {
        moveIndicator(mainLinks[0]);
        showSubCategory(mainLinks[0].getAttribute('data-category'));
    }
});


    
