/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 //Contador
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/** Validaciones del form de contacto */
document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Obtener valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Inicializar un array de errores
  let errores = [];

  // Validar el nombre
  if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      errores.push("El nombre solo puede contener letras y espacios.");
  }

  // Validar el teléfono
  const telefonoRegex = /^[1-9][0-9]{7,11}$/; // Entre 8 y 12 dígitos, sin empezar con 0
  if (!telefonoRegex.test(telefono)) {
      if (telefono.startsWith("0")) {
          errores.push("El número de teléfono no puede comenzar con 0.");
      } else {
          errores.push("El número de teléfono debe tener entre 8 y 12 dígitos y no contener letras.");
      }
  }

  // Validar el mensaje
  if (mensaje.length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
  }

  // Mostrar errores si los hay
  if (errores.length > 0) {
      event.preventDefault(); // Evita el envío del formulario
      alert("Errores en el formulario:\n" + errores.join("\n"));
  }
});

/** Java de Preguntas */
const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
	pregunta.addEventListener("click", () => {
		removerClaseActivo();
		pregunta.nextElementSibling.classList.add("activo");
	});
});

function removerClaseActivo() {
	preguntas.forEach((pregunta) => {
		pregunta.nextElementSibling.classList.remove("activo");
	});
}

