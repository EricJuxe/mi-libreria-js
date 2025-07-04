const miLibreria = {
  // 1. Convierte todo en mayúsculas al escribir
  forzarMayusculas: function(idElemento) {
    const campo = document.getElementById(idElemento);
    if (!campo) return;
    campo.addEventListener("input", () => {
      campo.value = campo.value.toUpperCase();
    });
  },

  // 2. Permite solo letras (bloquea números y símbolos)
  soloLetras: function(idElemento) {
    const campo = document.getElementById(idElemento);
    if (!campo) return;
    campo.addEventListener("input", () => {
      campo.value = campo.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    });
  },

  // 3. Cuenta caracteres en tiempo real y muestra el resultado en otro elemento
  contadorCaracteres: function(idElemento, idDestino) {
    const campo = document.getElementById(idElemento);
    const destino = document.getElementById(idDestino);
    if (!campo || !destino) return;
    const actualizarConteo = () => {
      destino.textContent = `${campo.value.length} caracteres`;
    };
    campo.addEventListener("input", actualizarConteo);
    actualizarConteo();
  },

  // 4. Bloquea palabras específicas mientras se escribe
  bloquearPalabras: function(idElemento, listaBloqueo) {
    const campo = document.getElementById(idElemento);
    if (!campo || !Array.isArray(listaBloqueo)) return;
    campo.addEventListener("input", () => {
      let texto = campo.value;
      listaBloqueo.forEach(palabra => {
        const regex = new RegExp(`\\b${palabra}\\b`, "gi");
        texto = texto.replace(regex, "***");
      });
      campo.value = texto;
    });
  }
};
