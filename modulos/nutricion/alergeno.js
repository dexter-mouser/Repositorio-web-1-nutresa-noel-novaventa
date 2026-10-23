
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".Alergeno-btn");
    const advertencia = document.getElementById("advertenciaAlergeno");

    if (!advertencia || botones.length === 0) {
        console.error("No se encontró el contenedor o los botones de alérgenos.");
        return;
    }

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const alergeno = boton.dataset.alergeno;

            advertencia.textContent =
                `⚠ Advertencia: esta receta contiene el alérgeno ${alergeno}.`;

            advertencia.hidden = false;
        });
    });
});
