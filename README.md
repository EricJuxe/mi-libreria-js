# 📚 Librería: miLibreria.js

## ✨ Descripción

**miLibreria.js** es una librería JavaScript ligera y autónoma, diseñada para ayudar a validar y controlar entradas de texto en formularios HTML.  

Incluye funciones como:

- Convertir a mayúsculas
- Validar que solo se ingresen letras
- Contar caracteres en un campo
- Bloquear palabras ofensivas

> ✅ Ideal para formularios escolares, encuestas y comentarios.

---

## 📦 Instalación

Puedes incluirla en tu proyecto HTML descargando el archivo `libreria.js` y enlazándolo así:

```html
<script src="libreria.js"></script>
```

---

## ⚙️ Uso

A continuación, un ejemplo completo de implementación en HTML y JS:

```html
<input type="text" id="curp" maxlength="18" placeholder="Ingresa tu CURP" />
<textarea id="queja" maxlength="200" placeholder="Escribe tu queja aquí..."></textarea>
<p id="contador">0 caracteres</p>

<script>
  // Validar CURP: solo letras y mayúsculas
  miLibreria.forzarMayusculas("curp");
  miLibreria.soloLetras("curp");

  // Validar queja: bloqueo de palabras + contador
  miLibreria.contadorCaracteres("queja", "contador");
  miLibreria.bloquearPalabras("queja", [
    "tonto",
    "idiota",
    "estúpido",
    "asno",
    "burro",
    "pendejo",
    "puto"
  ]);
</script>
```

---

## 🖼️ Capturas de Pantalla

### 📸 1. Formulario de CURP y queja escolar

*(Aquí inserta una imagen mostrando tu formulario cargado en el navegador)*

### 📸 2. Validación en acción

*(Aquí inserta una imagen de la consola mostrando la validación o el resultado en pantalla)*

---

## 🎥 Video

Incluye un video corto mostrando cómo se usa tu librería en un proyecto real.  
Duración recomendada: **máximo 1 minuto**.

📺 [Ver demostración en YouTube](https://youtu.be/tu-video)  
*O puedes subir el archivo directamente en el repositorio.*

---

## 🌐 GitHub Pages (opcional)

Para mostrar tu librería funcionando en línea:

1. Ve a la configuración del repositorio.
2. Activa **GitHub Pages**.
3. Selecciona la rama `main` y carpeta raíz `/`.

Tu demo estará disponible en:

```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

---

## 📁 Estructura del repositorio

```
/mi-libreria-js
│
├── README.md          # Este archivo
├── libreria.js        # Código fuente de la librería
└── index.html         # Ejemplo funcional de implementación
```

---

## 🧑‍💻 Autor

- Vicente de Jesús Zenón Regalado  
- Estudiante de Ingeniería en Sistemas Computacionales  
- Instituto Tecnológico de Oaxaca  
- 📧 vicenteregalado11@hotmail.com  
- 📱 9717178460  
- 📸 Instagram: [@vicentevx7](https://instagram.com/vicentevx7)