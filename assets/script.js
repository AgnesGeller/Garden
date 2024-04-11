// JavaScript code for interactive behavior
document.addEventListener('DOMContentLoaded', (event) => {
  // Function to handle navigation click and smooth scroll to section
  function scrollToSection(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute('href') || 'home';
    var targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // Add click event to navigation links
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
});

// Add this to your existing JavaScript

document.addEventListener('DOMContentLoaded', (event) => {
  // Function to scale up the element on mouseover
  function growOnHover(element) {
    element.style.transform = 'scale(1.1)';
  }

  // Function to reset the element's size on mouseout
  function resetOnMouseOut(element) {
    element.style.transform = 'scale(1)';
  }

  // Select the element you want to apply the motion to
  var headerElement = document.querySelector('header');

  // Add event listeners for mouseover and mouseout
  headerElement.addEventListener('mouseover', () => growOnHover(headerElement));
  headerElement.addEventListener('mouseout', () => resetOnMouseOut(headerElement));
});
