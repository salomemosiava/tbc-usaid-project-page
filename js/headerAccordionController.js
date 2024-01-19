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
  


// accordion
const items = document.querySelectorAll(".info-accordion-item");

items.forEach(item => {
    const header = item.querySelector('.info-accordion-header');

    header.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        if (openItem && openItem !== item) {
            toggle(openItem); // Close the previously open item!!
        }

        toggle(item); // Open or close the clicked item
    });
});

const toggle = (item) => {
    const content = item.querySelector('.info-accordion-content');

    if (item.classList.toggle("accordion-open")) {
        content.style.height = `${content.scrollHeight}px`;
    } else {
        content.removeAttribute("style");
    }
};
