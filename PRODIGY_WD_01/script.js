document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const contactForm = document.querySelector("#contact-form");
    const contactMessage = document.querySelector(".contact-message");
  
    // Change navbar style on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    // Form submission handler
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Simulate sending message
      contactMessage.textContent = "Thank you! Your message has been sent.";
      contactMessage.style.color = "green";
  
      // Reset the form
      contactForm.reset();
  
      // Remove the message after a delay
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    });
  
    // Add hover animations to team gallery images
    document.querySelectorAll(".team-gallery img").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });
  });

 
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.backgroundColor = '#f0f8ff';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.backgroundColor = '#fff';
    });
  });
  
  