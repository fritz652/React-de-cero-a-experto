//Variables y cosntantes


// estas tres variables son declaradas de manera global
const nombre = "Fritz";
const apellido = "Guzman";

let valorDado = 5;
    valorDado = 4;

console.log(nombre, apellido, valorDado) // Fritz Guzman 4

if (true) {
    //aqui las tres variables al estar dentro de una funcion
    //se llaman variables locales o que estan dentro del scop 
    const nombre = "Carlos";
    const apellido = "Chipana";

    let valorDado = 5;
    
    // aquí solo apareceran las variables dentro del escop al ser llamadas
    console.log(nombre, apellido, valorDado); //Carlos Chipana 5
}

// Cuado se llama denuevo las variables, solo aparecen las variables globales

console.log(nombre, apellido, valorDado); // Fritz Guzman 4
