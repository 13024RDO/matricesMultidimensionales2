const readline = require("readline-sync");

function mostrarMenu() {
    console.log("\n--- Menú ---");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");
    return readline.question("Elige una opción: ");
}

function ingresarPersona() {
    let nombre = readline.question("Ingresa el nombre: ");
    let apellido = readline.question("Ingresa el apellido: ");
    let dni = readline.question("Ingresa el DNI: ");
    let telefonos = readline.question("Ingresa los teléfonos separados por comas: ").split(",").map(t => t.trim());
    let hijos = readline.question("Ingresa los nombres de los hijos separados por comas: ").split(",").map(h => h.trim());
    return { nombre, apellido, dni, telefonos, hijos };
}

function mostrarTodos(datos) {
    console.log("\nDatos ingresados:");
    datos.forEach(persona => {
        console.log(`${persona.nombre} ${persona.apellido}, DNI: ${persona.dni}, Teléfonos: ${persona.telefonos.length} teléfono(s), Hijos: ${persona.hijos.length}`);
    });
}

function filtrarPorDni(datos) {
    let dni = readline.question("Ingresa el DNI para filtrar: ");
    let persona = datos.find(p => p.dni === dni);
    if (persona) {
        console.log(`\nDatos de ${persona.nombre} ${persona.apellido}:`);
        console.log(`DNI: ${persona.dni}, Teléfonos: ${persona.telefonos.length} teléfono(s), Hijos: ${persona.hijos.length}`);
    } else {
        console.log("No se encontró una persona con ese DNI.");
    }
}

let datos = [];
while (true) {
    let opcion = mostrarMenu();
    if (opcion === "1") {
        datos.push(ingresarPersona());
    } else if (opcion === "2") {
        mostrarTodos(datos);
    } else if (opcion === "3") {
        filtrarPorDni(datos);
    } else if (opcion === "4") {
        break;
    } else {
        console.log("Opción no válida.");
    }
}
