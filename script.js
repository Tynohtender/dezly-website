// Image Carousel
const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll('img');
  let current = 0;
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 5000);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typewriter Effect (works for all sections with #typewriter)
function typeWriterEffect(id, text, speed = 80) {
  let index = 0;
  function type() {
    if (index < text.length) {
      document.getElementById(id).innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.onload = () => {
  typeWriterEffect("typewriter", "Welcome to Dezly Contractors. We specialize in Plumbing, Roofing, Painting, and more!", 70);

};

let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container .slide");

function showSlides() {
  const current = slideIndex;
  slides[current].classList.remove("active");
  slides[current].classList.add("prev");

  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].classList.add("active");

  // Reset the previous slide after animation
  setTimeout(() => {
    slides[current].classList.remove("prev");
    slides[current].style.left = "100%"; // reset position
  }, 3000); // matches transition time
}

setInterval(showSlides, 5000); // change slide every 5 seconds

// ===== ONGOING PROJECTS DROP-IN =====
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // reset when out of view
      }
    });
  },
  { threshold: 0.2 } // trigger when 20% visible
);

projectCards.forEach(card => observer.observe(card));