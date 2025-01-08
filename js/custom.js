const reviewList = [
    {
        avatar: "review-1.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-2.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-3.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-4.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    },
    {
        avatar: "review-5.png",
        name: "Счастливый клиент",
        organization: "Potok Agency",
        tags: ["👍Советую", "🎯Сразу поняли", "🕑Быстро справились"],
        text: "Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!Очень довольны результатом и непременно обратимся ещё!"
    }
]

const formLabels = {
    ru: ["Заполните форму", "Получите бесплатную стратегию продвижения"],
    en: ["Fill out the form", "Get a free promotion strategy"],
    ua: ["Заповніть форму", "Отримайте безкоштовну стратегію просування"],
}


/*
 scroll animation
*/
const links = document.querySelectorAll('a[data-target]');

function smoothScroll(target) {
    const offset = 50; // отступ сверху
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // продолжительность
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

links.forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        if (targetElement) smoothScroll(targetElement);
    });
})


/*
 accordion
*/
document.querySelectorAll('.service h3').forEach(header => {
    header.addEventListener('click', () => {
        const service = header.parentElement;
        const isActive = service.classList.contains('active')

        document.querySelectorAll('.service h3').forEach(header => {
            const service = header.parentElement;
            service.classList.remove('active');
        });

        if (!isActive) {
            service.classList.add('active');
        }
    });
});


/*
 language selector
*/
const languageButton = document.querySelector('.header__action__language');
const dropdown = document.querySelector('.header__action__language__dropdown');

function handleOutsideClick(event) {
    if (!languageButton.contains(event.target) && !dropdown.contains(event.target)) {
        languageButton.classList.remove('active');
        document.removeEventListener('click', handleOutsideClick);
    }
}

languageButton.addEventListener('click', (event) => {
    event.stopPropagation();

    languageButton.classList.toggle('active');

    if (languageButton.classList.contains('active')) {
        document.addEventListener('click', handleOutsideClick);
    } else {
        document.removeEventListener('click', handleOutsideClick);
    }
});

const languageMobileButton = document.querySelector('.mobile-overlay__action__language');
const dropdownMobile = document.querySelector('.mobile-overlay__action__dropdown');

function handleMobileOutsideClick(event) {
    if (!languageButton.contains(event.target) && !dropdownMobile.contains(event.target)) {
        languageButton.classList.remove('active');
        document.removeEventListener('click', handleOutsideClick);
    }
}

languageMobileButton.addEventListener('click', (event) => {
    event.stopPropagation();

    languageMobileButton.classList.toggle('active');

    if (languageMobileButton.classList.contains('active')) {
        document.addEventListener('click', handleMobileOutsideClick);
    } else {
        document.removeEventListener('click', handleMobileOutsideClick);
    }
});


/*
 slider with steps
*/
const steps = document.querySelectorAll('.step');

steps.forEach(step => {
    step.addEventListener('click', () => {
        const index = parseInt(step.getAttribute('data-index'));
        swiper.slideTo(index);
    });
});

const updateSteps = (activeIndex) => {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === activeIndex);
    });
}

const swiper = new Swiper('.stages-slider', {
    slidesPerView: 1,
    autoHeight: true,
    breakpoints: {
        992: {
            autoHeight: false,
        },
    },
    navigation: {
        nextEl: '.stages-slider-button-next',
        prevEl: '.stages-slider-button-prev',
    },
    on: {
        slideChange: function () {
            updateSteps(swiper.activeIndex);
        }
    }
});


/*
 contact us form
*/
const progressBarFill = document.querySelector('.progress-bar-fill');

const updateProgressBar = (activeIndex) => {
    const progress = ((activeIndex + 1) / 6) * 100;
    progressBarFill.style.width = `${progress}%`;
    document.querySelector(".progress-bar-subtitle span").innerText = activeIndex + 1

    const form = document.getElementById('contact-form');
    const businessButton = document.querySelector(`.business-next`);
    businessButton.disabled = true;

    function isWorkExperienceSelected() {
        const formData = new FormData(form);
        return formData.has('business');
    }

    if (isWorkExperienceSelected()) {
        businessButton.disabled = false;
    } else {
        form.addEventListener('change', () => {
            businessButton.disabled = !isWorkExperienceSelected();
        });
    }

    const serviceButton = document.querySelector(`.service-next`);
    const serviceButtonRadios = form.querySelectorAll('input[name="service"]');

    serviceButton.disabled = true;

    function isService() {
        return Array.from(serviceButtonRadios).some(radio => radio.checked);
    }

    if (isService()) {
        serviceButton.disabled = false;
    } else {
        form.addEventListener('change', () => {
            serviceButton.disabled = !isService();
        });
    }

    const budgetInput = document.querySelector('input[name="budget"]');
    const budgetButton = document.querySelector(`.budget-next`);
    budgetButton.disabled = true;

    if (!!budgetInput.value) {
        budgetButton.disabled = false;
    } else {
        budgetInput.addEventListener('input', (e) => {
            if (e.target.value) {
                budgetButton.disabled = false;
            } else {
                budgetButton.disabled = true;
            }
        });
    }

    const workExperienceButton = document.querySelector(`.workExperience-next`);
    const workExperienceButtons = form.querySelectorAll('input[name="workExperience"]');

    workExperienceButton.disabled = true;

    function isWorkExperience() {
        return Array.from(workExperienceButtons).some(radio => radio.checked);
    }

    if (isWorkExperience()) {
        workExperienceButton.disabled = false;
    } else {
        form.addEventListener('change', () => {
            workExperienceButton.disabled = !isWorkExperience();
        });
    }

    const usedBeforeInput = document.querySelector('input[name="usedBefore"]');
    const usedBeforeButton = document.querySelector(`.usedBefore-next`);
    usedBeforeButton.disabled = true;

    if (!!usedBeforeInput.value) {
        usedBeforeButton.disabled = false;
    } else {
        usedBeforeInput.addEventListener('input', (e) => {
            if (e.target.value) {
                usedBeforeButton.disabled = false;
            } else {
                usedBeforeButton.disabled = true;
            }
        });
    }


    if (activeIndex === 5) {
        const currentLang = document.querySelector("html").getAttribute("lang");

        document.querySelector(".contact-us__title h2").innerText = formLabels[currentLang][0]
        document.querySelector(".contact-us__title__sub").innerText = formLabels[currentLang][1]
    }
}

const contactUsSwiper = new Swiper('.contact-us-slider', {
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    },
    autoHeight: true,
    speed: 500,
    navigation: {
        nextEl: '.contact-us-next',
        prevEl: '.contact-us-prev',
    },
    breakpoints: {
        992: {
            autoHeight: false,
        },
    },
    on: {
        slideChange: function () {
            updateProgressBar(contactUsSwiper.activeIndex);
        }
    }
});

updateProgressBar(0);

//const form = document.getElementById('contact-form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const title = document.querySelector(`.contact-us__title`);
//     const content = document.querySelector(`.contact-us__content`);
//     const successScreen = document.querySelector(`.success-screen`);
//
//
//     title.style.opacity = 0;
//     content.style.opacity = 0;
//     successScreen.style.display = "flex";
//
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());
//
//     // пример вызова php
//     // fetch('api.php', {
//     //     method: 'POST',
//     //     body: data
//     // }).then(response => {
//     //     console.log(response.text())
//     // })
//
//     console.log('Полученные данные:', data);
// });


/*
    review
 */
const reviewsContainer = document.getElementById('reviews-container');

const getTags = (tags) => tags.map(tag => (`<div class="tag">
    ${tag}
</div>`)).join('\n');

const getSLide = ({name, organization, tags, text}) => `
   <div class="heading">
    <img alt="reviewer avatar" class="heading__avatar" src="img/review-1.png" loading="lazy">

    <div class="heading__right">
     <p class="heading__right__name">
      ${name}
     </p>
     <p class="heading__right__organization">
      ${organization}
     </p>
    </div>
   </div>
   <div class="tags">
    ${getTags(tags)}
   </div>
   <p class="text">
    ${text}
   </p>
`

reviewList.forEach((item, index) => {
    const cardElement = document.createElement('div');

    cardElement.classList.add('swiper-slide');
    cardElement.innerHTML = getSLide(item);
    reviewsContainer.appendChild(cardElement)
})


/*
    adaptive slider
 */
const reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: "1.2",
    loop: false,
    spaceBetween: 16,
    centeredSlides: false,
    centeredSlidesBounds: false,

    breakpoints: {
        480: {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 16,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        992: {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 16,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        1920: {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 16,
            centeredSlides: false,
            centeredSlidesBounds: false,
        },
    },
    navigation: {
        nextEl: '.stages-slider-button-next',
        prevEl: '.stages-slider-button-prev',
    }
});

const teamSlider = new Swiper('.team', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    centeredSlides: false,
    centeredSlidesBounds: false,

    breakpoints: {
        992: {
            enabled: false
        },
    },
    navigation: {
        nextEl: '.stages-slider-button-next',
        prevEl: '.stages-slider-button-prev',
    }
});

const offersSlider = new Swiper('.offers', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    centeredSlides: false,
    centeredSlidesBounds: false,

    breakpoints: {
        992: {
            enabled: false
        },
    },
    navigation: {
        nextEl: '.stages-slider-button-next',
        prevEl: '.stages-slider-button-prev',
    }
});

const ownerSlider = new Swiper('.owner-slider', {
    effect: 'fade',
    loop: true,
    allowTouchMove: true,
    fadeEffect: {
        crossFade: true
    },
    autoHeight: true,
    speed: 400,
    breakpoints: {
        992: {
            autoHeight: false,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.stages-slider-button-next',
        prevEl: '.stages-slider-button-prev',
    },
    pagination: {
        el: ".owner-slider__pagination",
        clickable: true,
    },
});


/*
    mobile menu
 */
const body = document.body;
const html = document.querySelector("html");

document.querySelector('.burger').addEventListener('click', () => {
    const isOpen = body.getAttribute('menu-open') === 'true';

    if (!isOpen) {
        html.style.overflow = 'hidden';
    } else {
        html.style.overflow = 'auto';
    }

    body.setAttribute('menu-open', !isOpen);
});

document.querySelectorAll('.close-menu-action').forEach(btn => {
    btn.addEventListener('click', () => {
        body.setAttribute('menu-open', "false");
        html.style.overflow = 'auto';
    })
})

