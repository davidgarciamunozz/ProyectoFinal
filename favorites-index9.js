import { obtenerDoctores } from "./utils.js";
if (!localStorage.getItem('user-active')) {
    window.location.href = 'DOM4.html';
}

const doctores = await obtenerDoctores();
console.log(doctores);

const logoutButton_top = document.getElementById("logout");
const logoutButton_bottom = document.getElementById("logout_bottom");
const usuarioActivoKey = 'user-active';

logoutButton_top.addEventListener("click", () => {
localStorage.removeItem(usuarioActivoKey);
});
logoutButton_bottom.addEventListener("click", () => {
localStorage.removeItem(usuarioActivoKey);
});

// obtener el array de doctores 
// obtener el id de los doctores
// obtener el div donde se van a mostrar los doctores
// recorrer el array de doctores
// crear un nuevo objeto Doctor
// renderizar el objeto Doctor
// agregar el objeto Doctor al div de doctores
