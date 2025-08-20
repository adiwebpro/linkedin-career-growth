// Burger menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// FAQ toggle
const faqBtns = document.querySelectorAll(".faq-question");
faqBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Back to Top & Fade-in
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top:0, behavior:"smooth" });
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth' });
    if(window.innerWidth <=768) navLinks.style.display='none';
  });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
