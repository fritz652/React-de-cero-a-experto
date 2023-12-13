// Arreglos en JS

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

// el primer arreglo es un arreglo base
console.log(arreglo);
// el segundo arreglo  se genera con ... y se le agrega 5
console.log(arreglo2);
// el tercer arreglo se hace usando el etodo map (function(){return }), con el cual se ahce un nuevo arreglo agregandole una formula que uno desee.
console.log(arreglo3);

// esta seccion es mu importante entenderla
