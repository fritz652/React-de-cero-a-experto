//Funciones en JS
// funcion convencional no recomendada, si lo encuentras asi, es mejor cambairlo ala recomendada
function saludar1  (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar1('Goku'))


// funcion convencional recomendada 
const saludar2 = function  (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Vegeta'))

// funciones flechas super recomendada :::::::  () => {}
//   flecha extensa
const saludar3 =  (nombre) =>{
    return `Hola, ${nombre}`;
}



//   flecha corta si solo tiene un return se puede simplificar:
//const saludar4 =  (nombre) =>`Hola, ${nombre}`;  si bien se puede escribir asi, acostumbreate a escrir con parentisis ()
const saludar4 =  (nombre) =>(`Hola, ${nombre}`);

//   flecha flecha simplificada sin argumento:
//const saludar5 =  () =>`Hola Mundo`;  sin ()
const saludar5 =  () =>(`Hola Mundo`); // con ()


console.log(saludar3('Fritz'))
console.log(saludar4('Fritz'))
console.log(saludar5())


// SUPER IMPORTANTE: cuando se usa la funcion flecha simplificada que devuelve un objeto, se debe  tener cuidado y poner un () en vez de {}

const getUser = () => ({
    uid:'ABC123',
    username:'El papi1203'
}) // <---- ahi cierra los () del que se hablo.

const user = getUser();
console.log(user)

// Tarea:
//1. Trasformar a un funcion de Flecha
//2. Tiene que retornar un objeto implícito
//3.  Pruebas

/* function getUsuarioActivo (nombre){
    return {
        uid: 'ABC567',
        username:nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo); */

const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABC567',
        username:nombre,
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);