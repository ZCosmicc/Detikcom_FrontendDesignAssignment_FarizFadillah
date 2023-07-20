// Function to handle smooth scrolling when clicking on a menu item
function smoothScrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const offsetTop = targetSection.getBoundingClientRect().top;
    window.scrollBy({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Attach click event listeners to the menu items
const menuItems = document.querySelectorAll("nav a");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", smoothScrollToSection);
});
