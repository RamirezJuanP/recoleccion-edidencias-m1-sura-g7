let edad = null;
let tipoEntrada = null;
let opcion;

do {
    opcion = prompt(
        " CONTROL DE ACCESO EVENTOTECH \n" +
        "1. Registrar Edad del Asistente\n" +
        "2. Registrar Tipo de Entrada\n" +
        "3. Verificar Acceso (Evento Principal)\n" +
        "4. Verificar Acceso (Zona VIP)\n" +
        "5. Salir\n\n" +
        "Seleccione una opción (1-5):"
    );

    if (opcion === "1") {
        let input = prompt("Ingrese la edad del asistente:");
        let nuevaEdad = parseInt(input);

        if (isNaN(nuevaEdad) || nuevaEdad <= 0) {
            console.log("Edad inválida. Debe ser un número positivo.");
        } else {
            edad = nuevaEdad;
            console.log(`Edad registrada correctamente: ${edad} años.`);
        }

    } else if (opcion === "2") {
        let entrada = prompt('Ingrese el tipo de entrada ("General" o "VIP"):').toLowerCase();

        if (entrada === "general" || entrada === "vip") {
            tipoEntrada = entrada;
            console.log(`Tipo de entrada registrado correctamente: ${tipoEntrada.toUpperCase()}`);
        } else {
            console.log("Tipo de entrada inválido. Debe ser 'General' o 'VIP'.");
        }

    } else if (opcion === "3") {
        if (edad === null) {
            console.log("Primero debe registrar la edad del asistente.");
            let input = prompt("Ingrese la edad del asistente:");
            let nuevaEdad = parseInt(input);

            if (isNaN(nuevaEdad) || nuevaEdad <= 0) {
                console.log("Edad inválida. Debe ser un número positivo.");
            } else {
                edad = nuevaEdad;
                console.log(`Edad registrada correctamente: ${edad} años.`);
            }

            if (edad >= 18) {
                console.log("Acceso PERMITIDO al Evento Principal.");
            } else {
                console.log("Acceso DENEGADO (Menor de edad).");
            }

        } else if (edad >= 18) {
            console.log("Acceso PERMITIDO al Evento Principal.");
        } else {
            console.log("Acceso DENEGADO (Menor de edad).");
        }







    } else if (opcion === "4") {
        if (edad === null || tipoEntrada === null) {
            console.log("Debe registrar la edad y el tipo de entrada primero.");

            if (edad === null) {
                let input = prompt("Ingrese la edad del asistente:");
                let nuevaEdad = parseInt(input);

                if (isNaN(nuevaEdad) || nuevaEdad <= 0) {
                    console.log("Edad inválida. Debe ser un número positivo.");
                } else {
                    edad = nuevaEdad;
                    console.log(`Edad registrada correctamente: ${edad} años.`);
                }
            }

            if (tipoEntrada === null) {
                let entrada = prompt('Ingrese el tipo de entrada ("General" o "VIP"):').toLowerCase();

                if (entrada === "general" || entrada === "vip") {
                    tipoEntrada = entrada;
                    console.log(`Tipo de entrada registrado correctamente: ${tipoEntrada.toUpperCase()}`);
                } else {
                    console.log("Tipo de entrada inválido. Debe ser 'General' o 'VIP'.");
                }
            }
        }

        if (edad !== null && tipoEntrada !== null) {
            if (edad < 18) {
                console.log("Acceso DENEGADO (Menor de edad).");
            } else if (tipoEntrada === "vip") {
                console.log("Acceso PERMITIDO a Zona VIP.");
            } else {
                console.log("Acceso DENEGADO (Requiere entrada VIP).");
            }
        }

    } else if (opcion === "5") {
        console.log("Saliendo del sistema... ¡Gracias!");
    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }

} while (opcion !== "5");






