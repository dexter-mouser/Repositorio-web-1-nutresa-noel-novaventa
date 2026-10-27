// Pinta los chips del perfil alimentario desde el servicio y alterna su estado
(function () {
  "use strict";

  const CLASE_CHIP = "nutricion-perfil-chip";
  const CLASE_ACTIVO = "nutricion-perfil-chip--activo";

  const listaChips = document.getElementById("nutricion-perfil-lista");
  const mensajeError = document.getElementById("nutricion-perfil-error");
  if (!listaChips) return;

  // Aplica el estado con clase CSS y aria-pressed
  function establecerEstado(chip, activo) {
    chip.classList.toggle(CLASE_ACTIVO, activo);
    chip.setAttribute("aria-pressed", String(activo));
  }

  // Crea un <li> con un <button> por etiqueta
  function crearChip(etiqueta) {
    const item = document.createElement("li");
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = CLASE_CHIP;
    chip.dataset.id = etiqueta.id;
    chip.textContent = etiqueta.nombre.normalize("NFC");
    establecerEstado(chip, etiqueta.activo);
    item.append(chip);
    return item;
  }

  function mostrarError(texto) {
    mensajeError.textContent = texto;
    mensajeError.hidden = false;
  }

  async function cargarPerfil() {
    try {
      const perfil = await window.nutricionServicio.obtenerPerfilAlimentario();
      if (!perfil || !Array.isArray(perfil.etiquetas)) {
        mostrarError("Aún no tienes un perfil alimentario configurado.");
        return;
      }
      listaChips.replaceChildren(...perfil.etiquetas.map(crearChip));
    } catch (error) {
      mostrarError("No pudimos cargar tu perfil alimentario. Inténtalo de nuevo más tarde.");
    }
  }

  // Un solo listener para toda la lista
  listaChips.addEventListener("click", function (evento) {
    const chip = evento.target.closest("." + CLASE_CHIP);
    if (!chip) return;
    establecerEstado(chip, chip.getAttribute("aria-pressed") !== "true");
  });

  cargarPerfil();
})();