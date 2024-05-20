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
