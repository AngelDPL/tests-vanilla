import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excusa = document.getElementById("excusa");

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const parteAleatoria = (array) => {
    let indiceAleatorio = Math.floor(Math.random() * array.length)
    return array[indiceAleatorio]
}

let nuevoWho = parteAleatoria(who)
let nuevoAction = parteAleatoria(action)
let nuevoWhat = parteAleatoria(what)
let nuevoWhen = parteAleatoria(when)

let nuevaExcusa =`${nuevoWho} ${nuevoAction} ${nuevoWhat} ${nuevoWhen}`

excusa.innerText = nuevaExcusa



