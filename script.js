// ------------------- TYPED TEXT ANIMATION -------------------

var typed = new Typed('#element', {
  strings: ['Computer Science student.', 'Aspiring Software Developer.'],
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

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 30) {
    navbar.style.padding = '12px 8%';
  } else {
    navbar.style.padding = '18px 8%';
  }
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


particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// ===== Scroll Animation for Timeline =====
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Always animate on re-scroll
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => observer.observe(item));


// About section reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-left, .fade-right");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fade => appearOnScroll.observe(fade));
});


// Select all timeline items
const items = document.querySelectorAll('.timeline-item');

function checkVisibility() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Agar element viewport me visible hai
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      item.classList.add('show'); // animation apply
    } else {
      item.classList.remove('show'); // scroll out hone par remove, taaki dubara scroll pe animate ho
    }
  });
}

// Event listener for scroll
window.addEventListener('scroll', checkVisibility);

// Initial check
checkVisibility();


 document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
  });