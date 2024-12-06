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