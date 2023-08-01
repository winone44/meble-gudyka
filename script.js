//sticky menu
window.onscroll = function () {
    myFunction()
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


//slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItem = document.querySelector('.slider-item');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    const containerWidth = sliderContainer.clientWidth;
    const itemWidth = sliderItem.offsetWidth;
    const itemsCount = sliderWrapper.children.length;
    const wrapperWidth = itemWidth * itemsCount;
    const visibleItems = Math.floor(containerWidth / itemWidth);
    const visibleWidth = visibleItems * itemWidth;
    let position = 0;

    sliderWrapper.style.width = wrapperWidth + 'px';

    function checkButtons() {
        if (position === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (position === -(wrapperWidth - visibleWidth)) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    checkButtons();

    prevButton.addEventListener('click', function () {
        if (position !== 0) {
            position += itemWidth;
            sliderWrapper.style.transform = 'translateX(' + position + 'px)';
            checkButtons();
        }
    });

    nextButton.addEventListener('click', function () {
        if (position !== -(wrapperWidth - visibleWidth)) {
            position -= itemWidth;
            sliderWrapper.style.transform = 'translateX(' + position + 'px)';
            checkButtons();
        }
    });

    // Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrapper.addEventListener('touchstart', function (event) {
        touchStartX = event.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchmove', function (event) {
        touchEndX = event.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchend', function () {
        if (touchEndX < touchStartX) {
            nextButton.click();
        } else if (touchEndX > touchStartX) {
            prevButton.click();
        }
    });
});

//mobile menu
document.getElementById("mobile-menu-trigger").addEventListener("click", function () {
    let myDiv = document.getElementById("nav-links");
    if (myDiv.style.display === "flex") {
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
});

//scroll-behavior
function scrollToOtherProjects() {
    const element = document.querySelector('.other-projects');
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}
function scrollToFooter() {
    const element = document.querySelector('footer');
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

