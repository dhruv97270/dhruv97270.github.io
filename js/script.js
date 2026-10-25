// Small helpers only: mobile menu, "View project" toggles, footer year.
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
    })
  );

  // "View project" buttons show or hide the detailed write-up
  document.querySelectorAll("button[aria-controls$='-details']").forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
      btn.textContent = open ? "View project" : "Hide details";
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
