// darkmode
const toggleButton = document.querySelector("#dark-mode-toggle")
let darkMode = localStorage.getItem("theme")

if (darkMode === "dark") enableDarkMode()

toggleButton.addEventListener("click", e => {
  darkMode = localStorage.getItem("theme")
  if (darkMode === "dark") {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
})

function enableDarkMode() {
  document.body.classList.add("dark-mode")
  localStorage.setItem("theme", "dark")
  toggleButton.innerHTML = "☀️"
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode")
  localStorage.setItem("theme", "light")
  toggleButton.innerHTML = "🌒"
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener(e => (e.matches ? enableDarkMode() : disableDarkMode()))


/*==========Toggle Navigation===========*/
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*==========Scroll Reveal Anim==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

sr.reveal('.section__title section__title--intro',{});
sr.reveal('.section__title',{delay: 200});
sr.reveal('.section__subtitle',{delay: 700});
sr.reveal('.intro__img',{delay: 1000});
sr.reveal('.about-me__img',{delay: 1000});

sr.reveal('.paragraph',{delay: 1000});
sr.reveal('.service',{delay: 1000});
sr.reveal('.study',{delay: 1200});
sr.reveal('.studys',{delay: 1000});
sr.reveal('.container',{delay: 1000});
sr.reveal('.btn',{delay: 1000});


sr.reveal('.social-list',{delay: 1000});
sr.reveal('.footer__link',{delay: 1000});
sr.reveal('.logo__img',{delay: 1000});
sr.reveal('.thank__you',{delay: 1000});


//logo telkom
document.getElementById('telkom_logo').setAttribute('draggable', false);

// audio
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }