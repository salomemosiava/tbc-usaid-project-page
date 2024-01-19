// header scroll
document.addEventListener("DOMContentLoaded", () => {
    const pageHeader = document.querySelector("header");
  
    // template literals and destructuring
    window.addEventListener("scroll", () => {
      const { scrollY, scrollTop } = document.documentElement;
      const isPageScrolled = scrollY || scrollTop > 0;
      pageHeader.classList.toggle("scrolled", isPageScrolled);
    });
  });
  
