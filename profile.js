import { obtenerUsuarioActivo } from "./utils.js";

console.log(obtenerUsuarioActivo());
const welcomeDivDom5 = document.getElementById("main_name");


const render = async () => {
const usuarioActivo = obtenerUsuarioActivo();
if (!usuarioActivo) {
    window.location.href = 'DOM4.html';
}

const userName = obtenerUsuarioActivo().name;
console.log(userName);
welcomeDivDom5.innerText = 'Bienvenido ' + userName;

const secondlogoutButton = document.getElementById("logout-bottom");
const logoutButton = document.getElementById("logout-string");
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('user-active');
    window.location.href = 'DOM4.html';

});
secondlogoutButton.addEventListener('click', () => {
    localStorage.removeItem('user-active');
    window.location.href = 'DOM4.html';
});



};

document.addEventListener('DOMContentLoaded', render);



