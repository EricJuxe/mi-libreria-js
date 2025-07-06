
              Juarez Fernandez Eric Aaron
            Vicente de Jesús Zenón Regalado  
        Ingeniería en Sistemas Computacionales  
            Instituto Tecnológico de Oaxaca  
-

#  Librería: miLibreria.js

##  Descripción

**miLibreria.js** es una librería JavaScript ligera y autónoma, diseñada para ayudar a validar y controlar entradas de texto en formularios HTML.  

Incluye funciones como:

- Convertir a mayúsculas
- Validar que solo se ingresen letras
- Contar caracteres en un campo
- Bloquear palabras ofensivas

>  Ideal para formularios escolares, encuestas y comentarios.

---

##  Instalación

Puedes incluirla en tu proyecto HTML descargando el archivo `libreria.js` y enlazándolo así:

```html
<script src="libreria.js"></script>
```

---

## Uso

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
    "malo",
    "carajo",
    "asno",
    "burro",
    "rayos",
    "tonto"
  ]);
</script>
```

---

## Capturas de Pantalla

### 📸 1. Formulario de CURP y queja escolar

![image](https://github.com/user-attachments/assets/31a03809-a44a-40ef-93aa-1b07eda42b0a)

### 📸 2. Validación en acción

![image](https://github.com/user-attachments/assets/df31474f-946c-4ba1-9951-7ba77bfd964f)











