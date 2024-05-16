// import { userRegistered } from 'register.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const frmLogin = document.getElementById('frmLogin');
const usuariosKey = 'usuarios';
const usuarioActivoKey = 'usuarioActivo';
const usuarioActivo = localStorage.getItem(usuarioActivoKey);

frmLogin.addEventListener("submit", loginUser);

function loginUser(event){
    // Prevenir eventos precargados
    event.preventDefault();
    // Obtener los datos del usuario
    const getLocal = localStorage.getItem('user');
    const validateUser = JSON.parse(getLocal);
    // Validar que los campos no esten vacios
    if (email.value === '' || password.value === ''){
        alert('Por favor, llene todos los campos');
    }
    // Validar que el usuario este registrado
    else if (!validateUser.find(user => user.email === email.value)){
        alert('El usuario no esta registrado');
    }
    // Validar que la contraseña sea correcta
    else if (
        validateUser.find(user => user.email === email.value).password !== password.value){
        alert('Contraseña incorrecta');
        } 
    
    else if (validateUser.find(user => user.email === email.value).password === password.value)  {
        return;
    }    

    else {
        alert('Bienvenido');
        window.location.href = 'DOM5.html';
    }
};

    const obtenerUsuarioActivo = () => {
    const usuarioActivo = localStorage.getItem(usuarioActivoKey);

    if (!usuarioActivo){
        return null;
    }

    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios){
        if (usuario.id === usuarioActivo){
            return usuario;
        }
    }
    return null;
};

     const logout = () => {
    localStorage.removeItem(usuarioActivoKey);
}