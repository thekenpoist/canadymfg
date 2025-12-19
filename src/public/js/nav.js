(() => {
  const btn = document.getElementById("navToggle");
  const panel = document.getElementById("mobileNav");
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("hidden", isOpen);
  });
})();
