document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".Alergeno-btn");
    const advertencia = document.getElementById("advertenciaAlergeno");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const alergeno = boton.textContent.trim();

            advertencia.textContent =
                `⚠ Advertencia: esta receta contiene el alérgeno ${alergeno}.`;

            advertencia.hidden = false;
        });
    });
});