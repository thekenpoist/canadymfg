(() => {
  const btn = document.getElementById("navToggle");
  const panel = document.getElementById("mobileNav");
  const iconHamburger = document.getElementById("iconHamburger");
  const iconClose = document.getElementById("iconClose");

  if (!btn || !panel) return;

  const setState = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    panel.classList.toggle("hidden", !open);

    if (iconHamburger && iconClose) {
      iconHamburger.classList.toggle("hidden", open);
      iconClose.classList.toggle("hidden", !open);
    }
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    setState(!isOpen);
  });

  // Optional: close menu when a mobile nav link is clicked
  panel.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") setState(false);
  });

  // Start closed
  setState(false);
})();
