// Alterna el estado visual de los chips del perfil alimentario
(function () {
  const CLASE_CHIP = "nutricion-perfil-chip";
  const CLASE_ACTIVO = "nutricion-perfil-chip--activo";

  const listaChips = document.querySelector(".nutricion-perfil-lista");
  if (!listaChips) return;

  // Un solo listener para toda la lista
  listaChips.addEventListener("click", function (evento) {
    const chip = evento.target.closest("." + CLASE_CHIP);
    if (!chip) return;

    const activo = !chip.classList.contains(CLASE_ACTIVO);
    chip.classList.toggle(CLASE_ACTIVO, activo);
    chip.setAttribute("aria-pressed", String(activo));
  });
})();