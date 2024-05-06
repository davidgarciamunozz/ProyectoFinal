import { obtenerDoctores, Doctor } from "./utils.js";


const render = async () => {
    
const doctores = await obtenerDoctores();

const doctor_box = document.getElementById("main");

for (const doctor of doctores) {
    const doctorRenders = new Doctor(doctor.firstname, doctor.lastname, doctor.genre, doctor.role, doctor.available, doctor.image, doctor.id, doctor.dateOfBirth, doctor.maritalStatus, doctor.emailAddress, doctor.location, doctor.phoneNumber);
    const doctorRender = doctorRenders.render();
    doctor_box.appendChild(doctorRender);
 }



};


document.addEventListener('DOMContentLoaded', render);