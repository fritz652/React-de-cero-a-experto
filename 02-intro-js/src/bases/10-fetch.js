//10-Fetch API
const apiKey = 'kFe7N7KcsL1sMQVyYXbc6KCRXfoVe09i';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then(({data}) => {
        const { url }= data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
})
.catch(console.warn);