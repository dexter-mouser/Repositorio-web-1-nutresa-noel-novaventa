(function () {
  "use strict";

  window.nutricionServicio = {
    async listarTodos() {
      const platos = window.platosNutricionData;

      if (!Array.isArray(platos)) {
        throw new Error("No se cargaron los datos de platos de nutrición.");
      }

      return platos;
    },
  };
})();


(function () {
  "use strict";

  // Mock API (mockapi.io) y usuario simulado
  const URL_BASE_API = "https://6ae0310e8e42963c8d5f0dc0.mockapi.io/api/v1";
  const ID_USUARIO_ACTUAL = 1;

  window.nutricionServicio = {
    async listarTodos() {
      const platos = window.platosNutricionData;

      if (!Array.isArray(platos)) {
        throw new Error("No se cargaron los datos de platos de nutrición.");
      }

      return platos;
    },

    // Devuelve el perfil alimentario del usuario actual o null si no existe
    async obtenerPerfilAlimentario() {
      try {
        const respuesta = await fetch(
          `${URL_BASE_API}/perfilesAlimentarios?idUsuario=${ID_USUARIO_ACTUAL}`
        );
        if (respuesta.status === 404) return null;
        if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);

        const perfiles = await respuesta.json();
        const perfil = Array.isArray(perfiles)
          ? perfiles.find((p) => Number(p.idUsuario) === ID_USUARIO_ACTUAL)
          : null;
        return perfil ?? null;
      } catch (error) {
        console.error("nutricionServicio.obtenerPerfilAlimentario:", error);
        throw error;
      }
    },
  };
})();