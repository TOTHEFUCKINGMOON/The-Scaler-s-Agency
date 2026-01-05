// Smooth UX + fake form handler (à brancher sur ton backend / Formspree / Zapier)
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile menu
const burger = document.querySelector(".burger");
const mobile = document.querySelector(".mobile");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobile.style.display = expanded ? "none" : "block";
    mobile.setAttribute("aria-hidden", String(expanded));
  });

  // close on click
  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobile.style.display = "none";
      mobile.setAttribute("aria-hidden", "true");
    });
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.handleLead = function handleLead(e){
  e.preventDefault();
  const form = e.currentTarget;
  const msg = document.getElementById("formMsg");

  const data = Object.fromEntries(new FormData(form).entries());

  // TODO: branche ici ton endpoint (ex: fetch("/api/lead", {method:"POST", body: JSON.stringify(data)})
  console.log("Lead:", data);

  if (msg) {
    msg.textContent = "Reçu. Je te recontacte sous 24–48h.";
  }
  form.reset();
  return false;
};