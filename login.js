const email = document.getElementById('email');
const password = document.getElementById('password');
const frmLogin = document.getElementById('frmLogin');

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
    else {
        alert('Bienvenido');
        window.location.href = 'DOM5.html';
    }     
}