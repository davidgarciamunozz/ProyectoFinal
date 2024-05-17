const render = async () => {
 
const logoutButton = document.getElementById("logout-string");
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('user-active');
    window.location.href = 'index.html';
});
};

document.addEventListener('DOMContentLoaded', render);



