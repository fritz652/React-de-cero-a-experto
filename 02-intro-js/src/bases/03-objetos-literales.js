// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 55321221,
        lat:14.3232,
        lng:34.9874115,
    }
    
};

//console.table(persona);
const persona2 = {...persona}
persona2.nombre='Steve';

console.log(persona);
console.log(persona2);
