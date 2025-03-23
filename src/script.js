document.addEventListener("DOMContentLoaded", () => {
    // FAQ Section - Toggle Answers on Click
    const faqCards = document.querySelectorAll(".faqCard");
    faqCards.forEach((card) => {
      card.addEventListener("click", () => {
        const answer = card.querySelector(".faqAnswer");
        answer.classList.toggle("active");
      });
    });
  
    // Carousel Navigation
    const carouselContainer = document.querySelector(".carouselCardConatiner");
    if (carouselContainer) {
      let scrollAmount = 0;
      const scrollStep = 300; // Adjust for smooth scrolling
      const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
  
      document.querySelector("#carouselLeft").addEventListener("click", () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) scrollAmount = 0;
        carouselContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      });
  
      document.querySelector("#carouselRight").addEventListener("click", () => {
        scrollAmount += scrollStep;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        carouselContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      });
    }
  
    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Signin and Get Started Buttons - Clickable
    document.querySelector(".signinButton").addEventListener("click", () => {
      alert("Signin button clicked!");
      // Add signin functionality here
    });
  
    document.querySelector(".getStartedButton").addEventListener("click", () => {
      alert("Get started button clicked!");
      // Add get started functionality here
    });
  });
