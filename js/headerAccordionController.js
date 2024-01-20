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
const accordionItems = document.querySelectorAll(".info-accordion-item");

accordionItems.forEach(item => {
    const itemHeader = item.querySelector('.info-accordion-header');

    itemHeader.addEventListener("click", () => {
        const openAccordionItem = document.querySelector(".accordion-open");

        if (openAccordionItem && openAccordionItem !== item) {
            toggle(openAccordionItem); // Close the previously open item!!
        }

        toggle(item); // Open or close the clicked item

        // Scroll to the opened item for a smooth experience
        if (item.classList.contains("accordion-open")) {
            item.scrollIntoView({ behavior: "smooth" });
        }
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
