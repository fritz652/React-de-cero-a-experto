//Desestructuración

//Asiganción Desestructurante
const persona = {
    nombre:'Tony',
    edad: 45,
    clave:'Iroman'
}

console.log( persona.nombre);   //  Tony
console.log( persona.edad);     //  45
console.log( persona.clave);    //  Iroman

//........acabamos de ver como es normalmente en su forma base, ahora
//........veremos como hacer una asignación Desestructurante:

//Ejemplo1:::::::::::::::::::::::::::::

const persona1 ={
    nombre:'Alfred',
    edad:56,
    clave:'Marvel'
}

const {nombre, edad, clave}= persona1;

console.log(nombre);// Alfred
console.log(edad);  // 56
console.log(clave); //Marvel


//Ejemplo2:::::::::::::::::::::::::::::

const people = {
    nombre:'Donatelo',
    edad:30,
    clave:'Camcom'
}

const retornaPersona = ({nombre, edad, clave}) =>{
    console.log(nombre, edad, clave)
}

retornaPersona(people) //Donatelo 30 Camcom

//Ejemplo3:::::::::::::::::::::::::::::::

const alumno = {
    name:"Juan",
    age:15,
    dni:7878787878
}

const use = ({name,age, dni}) =>{
    return {
        nombreClave: name,
        anios:age,
    }
}

const {nombreClave,anios} = use(alumno);
console.log(nombreClave, anios) // Juan 15
