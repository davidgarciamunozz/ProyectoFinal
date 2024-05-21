import { obtenerUsuarioActivo } from "./utils.js";

const welcomeDiv = document.getElementById("ProfileCallToAction-item1");

const render = async () => {
  const usuarioActivo = localStorage.getItem('user-active'); 
  console.log(usuarioActivo);
  console.log(obtenerUsuarioActivo());

  // obtener el nombre del usuario activo
  const userName = obtenerUsuarioActivo().name;
  // concatener el nombre del usuario activo
  welcomeDiv.innerText = 'Bienvenido ' + userName;
};



document.addEventListener("DOMContentLoaded", render);  