// Mostrar confeti al cargar
window.onload = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
};

// Mostrar corazones al hacer clic
document.getElementById("coverImage").addEventListener("click", () => {
  document.querySelector(".cover-container").style.display = "none";
  document.getElementById("mainContainer").classList.remove("hidden");

  // Efecto de corazones
  const duration = 1.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#ff4e91", "#ff82c1", "#ffb6d5"]
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#ff4e91", "#ff82c1", "#ffb6d5"]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
