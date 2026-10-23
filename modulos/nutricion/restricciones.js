(function () {
  function iniciarRestricciones() {
    var checks = document.querySelectorAll(".restriccion-check");
    window.restriccionesAlimentarias = {};

    checks.forEach(function (check) {
      window.restriccionesAlimentarias[check.dataset.restriccion] = check.checked;

      check.addEventListener("change", function () {
        window.restriccionesAlimentarias[check.dataset.restriccion] = check.checked;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", iniciarRestricciones);
})();
