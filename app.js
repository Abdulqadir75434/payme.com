// Hamburger menu for mobile nav
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const authLinks = document.querySelector(".auth");

  if(menuToggle){
    menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("active");
      authLinks.classList.toggle("active");
    });
  }
  
  
  document.querySelectorAll('.faq-header').forEach((header) => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
    });
  });
});