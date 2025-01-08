const preloaderSteps = document.querySelectorAll(".preloader__step");
const preloader = document.querySelector(".preloader");

let currentStep = 0;

const timeouts = [300, 400, 400, 500]

function showNextStep() {
    if (currentStep > 0) {
        preloaderSteps[currentStep - 1].style.opacity = "0";
    }

    if (currentStep < preloaderSteps.length) {
        preloaderSteps[currentStep].style.opacity = "1";
        currentStep++;
        setTimeout(showNextStep, timeouts[currentStep - 1]);
    }

    if (currentStep === 4) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.pointerEvents = "none";
        }, 500);
    }
}

showNextStep();