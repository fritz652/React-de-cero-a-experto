//Desestructuracion de Arreglos

//Ejmplo 1
const personajes =['Goku', 'Vegeta', 'Trunks'];
const [p1,p2,p3] = personajes;
console.log(p2)// Vegeta

//Ejmplo 2
const retonaArreglo = () => {
    return ["ABC", 123]
}

const [letras, numeros] = retonaArreglo();
console.log (letras,numeros) //ABC 123

//Tarea:
//1. el primer elemento del arr se llamará nombre
//2. el segundo se llamara setNombre
const useState = (valor)=> {
    return[ valor, ()=>{console.log('Hola mundo')}];
}

const [nombre,setNombre] = useState('Goku');

console.log(nombre);// Goku
setNombre(); // Hola mundo