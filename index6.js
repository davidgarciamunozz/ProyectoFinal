import { obtenerDoctores, Doctor } from "./utils.js";


const render = async (textoBusqueda) => {

// const textoLimpio = textoBusqueda.toLowerCase();
// console.log(textoLimpio);    
const doctores = await obtenerDoctores();

const doctor_box = document.getElementById("main");

for (const doctor of doctores) {
    const doctorRenders = new Doctor(doctor.firstname, doctor.lastname, doctor.genre, doctor.role, doctor.available, doctor.image, doctor.id, doctor.dateOfBirth, doctor.maritalStatus, doctor.emailAddress, doctor.location, doctor.phoneNumber);
    const doctorRender = doctorRenders.render();
    doctor_box.appendChild(doctorRender);
 };

 if(textoLimpio === "" || doctor.firstame.toLowerCase().includes(textoLimpio)){
    contenedor.appendChild(agenteRender);
    agente.addEventListeners();
}

//  const barraBusqueda = document.getElementById("larger");
//  barraBusqueda.addEventListener("input", async (event)=>{
//     const textBusqueda = event.target.value;
//     await render(textBusqueda);
//  });

 



};


document.addEventListener('DOMContentLoaded', render);