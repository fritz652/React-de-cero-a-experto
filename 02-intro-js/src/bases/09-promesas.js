import { getHeroeById } from "./bases/08-imp-export";

//Promesas


/* una promesa es una funcion donde sus parametros por sonvencion se llamaman
resolve y reject. Resolve es el parametro que se ejecutará cuando la promesa se cumple, 
en cambio reject es el parametro que se ejecuta cuando la promesa no se ejecuta */

//ejemplo1
const promesa = new Promise ((resolve, reject)=>{
    setTimeout(()=>{ //................. aqui usamos un setTimeout una funcion que sirve para ejecutar con retraso una accion
        console.log('2segundos despues')
    }, 2000)
});
// de la manera que acabamos de ver, si bien se ejecuta, no tnemos la manera de reaacionar


// ejemplo2
const promesa1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{ //................. aqui usamos un setTimeout una funcion que sirve para ejecutar con retraso una accion
        resolve();
    }, 3000)
});

// para ejecutar adecuadamente una promesa se hace con: 
//catch : para errores u ecepciones
//finally:  cuando es necesario ejecutar algo despues del then y despues del catch
//then: cuando la promesa se hizo correctamente. Es el mas importante
promesa1.then (()=>{
    console.log('Then de la promesa en 3 segundos')
})


//Ejmeplo3
// tarea: importar el heroe
const promesa2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{        
        const p1 =getHeroeById(2);
        resolve(p1)
    }, 4000)
});

promesa2.then ((heroe)=>{
    console.log('heroe', heroe)
})

.catch(err => console.warn(err));

//ejemplo4: con promesa que uno manda el heroe que necesita buscar
// Este es la forma mas utilizada

const getHeroeByAsync = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{        
            const p1 =getHeroeById(id);
            resolve(p1)
        }, 5000)
    });
}

getHeroeByAsync(4)// aqui uno puede cmabiar el id del Heroe y lo buscara
.then(heroe=> console.log('Heroe',heroe));

//ejemplo5: usnado then y catch:

const getHeroeByAsync2 = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{        
            const p1 =getHeroeById(id);
            p1?resolve(p1):reject('No se puedo encontrar al héroe')
        }, 5000)
    });
}

getHeroeByAsync2(15)// aqui uno puede cmabiar el id del Heroe y lo buscara
.then(heroe=> console.log('Heroe',heroe)) //.then(console.log)
.catch(err => console.warn(err));//.catch(console.warn)