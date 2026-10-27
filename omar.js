const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

const navLinks = document.getElementById('navLinks');

function openCloseMenu() {
    navLinks.classList.toggle('active');
}

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});