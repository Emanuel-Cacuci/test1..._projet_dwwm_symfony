import './bootstrap.js';
import './script/header.js'
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import './styles/header.css';
import './styles/formInscription.css';
import './styles/formConnexion.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

console.log("salut")
const button = document.getElementById('button');

button.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(e.target)
    button.innerText = "message envoye";
    button.style.border = "1px solid red";
    button.style.color = "blue";

})
