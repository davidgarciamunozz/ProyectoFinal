import { obtenerDoctores, Doctor, obtenerUsuarioActivo, obtenerDoctorPorId, obtenerUsuarios } from "./utils.js";
 
const render = async () => {

  const logoutButton = document.querySelector(".lista__boton");
  
  let usuarios = await obtenerUsuarios();
  console.log(usuarios);



  const usuarioActivo = obtenerUsuarioActivo();
  console.log(usuarioActivo);




  if (!usuarioActivo) {
      window.location.href = "DOM4.html";
      return;
  } 

if (usuarioActivo) {
    logoutButton.innerText = "Visitar Perfil";
}


logoutButton.addEventListener('click', () => {
    window.location.href = 'DOM5.html';
});

const doctores = await obtenerDoctores();
console.log(doctores);



const idDoctores = doctores.map(doctor => doctor.id);
console.log(idDoctores);

const doctor_box = document.getElementById("main");

for (const doctor of doctores) {
  const doctorRenders = new Doctor(doctor.firstname, doctor.lastname, doctor.genre, doctor.role, doctor.available, doctor.image, doctor.id, doctor.dateOfBirth, doctor.maritalStatus, doctor.emailAddress, doctor.location, doctor.phoneNumber);
  const doctorRender = doctorRenders.render();
  doctor_box.appendChild(doctorRender);
 };

 const searchInput = document.getElementById("larger");

 searchInput.addEventListener("input", function(){

    const searchText = searchInput.value.toLowerCase();

    const doctorList = document.getElementsByClassName("main_doctor");

    let doctor_encontrado = false;

    for (let i = 0; i < doctorList.length; i++) {
        const doctor = doctorList[i];
        const searchData = doctor.querySelector(".doctor_title").textContent.toLowerCase();


        if(searchData.includes(searchText)){
            doctor.style.display = "flex";
            doctor_encontrado = true;
        } else {
            doctor.style.display = "none";
        }


    }

    let mensaje = document.querySelector(".mensaje");
    if (!doctor_encontrado) {
      if (!mensaje) {
        mensaje = document.createElement("p");
        mensaje.textContent = "Doctor no encontrado";
        mensaje.classList.add("mensaje");

        doctor_box.appendChild(mensaje);
      }
      console.log("No se encontró ningún doctor");
    } else {
      if (mensaje) {
        mensaje.remove();
      }
    }

    


});

};


document.addEventListener('DOMContentLoaded', render);