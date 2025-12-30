/* =========================
   WHATSAPP CONFIG
========================= */
const phone = "5218128779915"; // número real
const message = "Hola, quiero información del show de Alita y Menike 🎪";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.getElementById("btnHero").href = url;
document.getElementById("btnCta").href = url;


/* =========================
   ELEMENTOS
========================= */
const intro = document.getElementById("circus-intro");
const music = document.getElementById("circus-music");
const musicBtn = document.getElementById("music-toggle");


/* =========================
   CONFIG AUDIO
========================= */
music.volume = 0.35;


/* =========================
   CIRCUS INTRO + MUSIC
========================= */
window.addEventListener("load", () => {

  /* Abrir telón */
  setTimeout(() => {
    intro.classList.add("open");
  }, 700);

  /* Fade out */
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 2400);

  /* Quitar telón y activar música */
  setTimeout(() => {
    intro.remove();

    /* Mostrar botón de música */
    musicBtn.style.display = "flex";

    /* Intentar reproducir música */
    music.play()
      .then(() => {
        musicBtn.textContent = "🔊";
      })
      .catch(() => {
        musicBtn.textContent = "🔇";
      });

  }, 3600);

});


/* =========================
   BOTÓN MÚSICA
========================= */
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
});


// =========================
// SCROLL REVEAL PRO
// =========================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 👈 solo una vez
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Delay automático
revealElements.forEach((el, i) => {
  el.style.setProperty("--delay", `${i * 0.08}s`);
  observer.observe(el);
});
