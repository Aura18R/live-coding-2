// API
const API_ENDPOINT = 'https://yesno.wtf/api';

const button = document.getElementById('button');
const div = document.getElementById('answer');

function fetchAnswer(){
    fetch(API_ENDPOINT)
    .then(answer => answer.json())
    .then(data => {
        div.textContent =data.answer;
    })
    setTimeout(function(){
        div.textContent = "";
    }, 5000)

}


button.addEventListener('click', fetchAnswer);

/*  
/codigo aqui
//console.log("Inicio de asincronia");
setTimeout(function (){
    console.log("Esta funcion se ejecuta despues de 5 segundos");
    console.log("Inicio de asincronia");
    console.log("Fin de asincronismo");
},5000);
*/