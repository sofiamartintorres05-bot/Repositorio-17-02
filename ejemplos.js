
// 1. CONST - Temperatura constante
const temperaturaCongelador = -18;
console.log(`Temperatura: ${temperaturaCongelador}°C`);

// 2. CONST - Lista de compras
const listaCompras = "Leche, Pan, Huevos, Queso";
console.log(listaCompras);

// 3. LET - Cantidad de dinero que crece
let ahorros = 5000;
ahorros = ahorros + 2000; // Incrementó
console.log(`Ahorros actuales: ${ahorros}`);

// 4. DATOS - Array de temperaturas
const temperaturas = [15, 22, 18, 25, 20];
console.log(temperaturas);

// 5. DATOS - Objeto producto
const producto = {
    nombre: "Laptop",
    precio: 800,
    stock: 5
};
console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);

// 6. IF - Verificar edad
const edadCliente = 18;
if (edadCliente >= 18) {
    console.log("Puede comprar");
} else {
    console.log("Debe ser mayor de edad");
}

// 7. SWITCH - Elegir color
const colorSeleccionado = 2;
switch (colorSeleccionado) {
    case 1:
        console.log("Rojo");
        break;
    case 2:
        console.log("Azul");
        break;
    case 3:
        console.log("Verde");
        break;
}

// 8. FOR - Contar del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(`Cuenta regresiva: ${i}`);
}

// 9. FOR - Calcular promedio
const calificaciones = [8, 9, 7, 9, 8];
let sumaCalificaciones = 0;
for (let i = 0; i < calificaciones.length; i++) {
    sumaCalificaciones = sumaCalificaciones + calificaciones[i];
}
const promedio = sumaCalificaciones / calificaciones.length;
console.log(`Promedio: ${promedio}`);

// 10. TERNARIO - Estado de envío
const diasEnvio = 2;
const estado = diasEnvio <= 3 ? "Llega pronto" : "Envío estándar";
console.log(estado);
