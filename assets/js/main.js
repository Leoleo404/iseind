/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') :
        header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // animations repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {
    delay: 600,
    distance: '100px',
    interval: 100
})
sr.reveal(`.about__data, .join__image`, {
    origin: 'right'
})
sr.reveal(`.about__image, .join__data`, {
    origin: 'left'
})
sr.reveal(`.popular__card`, {
    interval: 200
})


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LIGHT DARK MODE ===============*/

function calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark
}) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({
    buttonEl,
    isDark
}) {
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({
    theme
}) {
    document.querySelector("html").setAttribute("data-theme", theme);
}


/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({
    buttonEl: button,
    isDark: currentThemeSetting === "dark"
});
updateThemeOnHtmlEl({
    theme: currentThemeSetting
});

/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({
        buttonEl: button,
        isDark: newTheme === "dark"
    });
    updateThemeOnHtmlEl({
        theme: newTheme
    });

    currentThemeSetting = newTheme;
});