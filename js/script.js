document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const frontImageContainer = document.getElementById('frontImageContainer')

function OnScroll() {
    let scrollY = window.scrollY
    let bottomHeight = window.innerHeight

    frontImageContainer.style.top = `${scrollY/16}vh`;
    frontImageContainer.style.opacity = 1 - ( scrollY / bottomHeight )
}

OnScroll();

document.addEventListener('scroll', OnScroll);