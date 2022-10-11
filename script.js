// =====Variables

// Ham Menu
const navToggle = document.getElementById("menutoggle");
// Nav Container
const Nav = document.getElementById("nav");
// Body
const body = document.getElementById("body");
// Nav Anchor Tags
const link = document.querySelectorAll(".menu a");
// Sections
const sections = document.querySelectorAll("section");

// =====On-Click Ham Menu

navToggle.addEventListener("click", () => {
  // Toggling Class "opened" to ham Menu For Open and Close animation.

  navToggle.classList.toggle("opened");

  // Toggling Class "Show" To Nav.

  Nav.classList.toggle("show");
});

// ========Loop On Anchor tags to Close Menu When Clicked on a link.

link.forEach((a) => {
  a.addEventListener("click", () => {
    if (Nav.classList.contains("show")) {
      Nav.classList.remove("show");
      navToggle.classList.remove("opened");
    }
  });
});
