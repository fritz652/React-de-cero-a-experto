//importacion porfeaul(heroes) e importacion individual (owners), asi se importan juntos, pero separados pro llaves
import  heroes, { owners} from '../data/heroes'
//ejemplo1
export const getHeroeById = (id) => {  // prodecemos a exportarlo al final para el 09
    return heroes.find((n)=>n.id === id);
}


console.log(getHeroeById(2));

//ejemplo2

export const getHeroeByOwnwer = (owner) => { // prodecemos a exportarlo al final para el 09
    return heroes.filter((n)=>n.owner === owner);
}


console.log(getHeroeByOwnwer ('DC'));

//Ejemplo3 : ejecutando la importacion individual

console.log(owners);