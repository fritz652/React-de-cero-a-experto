//template String

// a continuación vemos la forma convencional de concatenar dos strings:

const nombre = "Fritz";
const apellido = "Guzman";

const nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto); // Fritz Guzman

// Ahora vamos a ver el uso del Tempalte string:
// recuerda que para el uso del Template string se debe usar los bac tips :` `

const nombre2 = "Lench";
const apellido2 = "Guzman";

const nombreCompleto2 = `${nombre2} ${apellido2}`;

console.log(nombreCompleto2);

// a continuacion veremos la funcion get:

function getSaludo (nombre) {
    return 'Hola ' + nombre;
}

console.log (`Este es un texto: ${getSaludo(nombre)}`);

