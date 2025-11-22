// const boton = document.getElementById("scrollBtn");
// boton.addEventListener('click', () => {
//     window.scrollTo({ top:646, behavior: 'smooth', block: "start"});
// });

const boton = document.getElementById("scrollBtn");

boton.addEventListener("click", () => {
  const main = document.getElementById("container2");
  const target = main.offsetTop - 46; // posición con offset
  const start = window.scrollY;       // dónde estamos ahora
  const distance = target - start;    // cuánto tenemos que movernos
  const duration = 2000;              // duración en ms (1.5s)
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing "suave"
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, start + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

//   requestAnimationFrame(animation);
// });

// const animacion = document.getElementById("anima");

//   titulo.addEventListener("mouseenter", () => {
//     titulo.classList.add("anima");
//   });

//   titulo.addEventListener("mouseleave", () => {
//     titulo.classList.remove("anima");
//   });

