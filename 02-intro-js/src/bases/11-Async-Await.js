//11-Async-Await

/* 
Este es un ejemplo simplificado de uan promesa

const getImagenPromesa = () => new Promise(resolve =>('https://asasa.com'))
getImagenPromesa().then(console.log) 


Aqui vemos una equivalencia de una promesa


const getImagen = async () => {
    return 'https://asasad3aserewqf.com';
}

getImagen().then(console.log);

*/

const getImagen = async () => {
    try {
        const apiKey = 'kFe7N7KcsL1sMQVyYXbc6KCRXfoVe09i';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const { url }= data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        }catch (error){
    //manejo del error
    console.log(error)
    }
}

getImagen();


