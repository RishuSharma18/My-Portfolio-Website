// ------------------- TYPED TEXT ANIMATION -------------------

var typed = new Typed('#element', {
  strings: ['a Computer Science student.', 'an Aspiring Software Developer.'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});


// ------------------- MOBILE MENU TOGGLE -------------------

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}


// ------------------- SMOOTH SCROLLING FOR NAV LINKS -------------------

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth"
    });
  });
});


// ------------------- SCROLL-TO-TOP BUTTON -------------------

const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑";
scrollBtn.classList.add('scrollTopBtn');
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});


// ------------------- REVEAL SECTIONS ON SCROLL -------------------

const revealSections = document.querySelectorAll('section');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealSections.forEach(section => {
    const revealTop = section.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ------------------- NAVBAR ACTIVE LINK HIGHLIGHT -------------------

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  let current = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});
