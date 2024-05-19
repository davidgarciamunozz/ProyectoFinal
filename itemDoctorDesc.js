import { obtenerDoctorPorId } from "./utils.js";

const render = async () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const doctor = await obtenerDoctorPorId(parseInt(id));

    const refer = document.getElementById("profile_img");
    refer.src = doctor.image;
    refer.alt = doctor.firstname;

    const nombre_box = document.getElementById("nombreCompleto");
    nombre_box.textContent = `${doctor.firstname} ${doctor.lastname}`;

    const date_box = document.getElementById("dateOfBirth");
    date_box.textContent = doctor.dateOfBirth;

    const maritalStatus_box = document.getElementById("maritalStatus");
    maritalStatus_box.textContent = doctor.maritalStatus;

    const email_box = document.getElementById("emailAddress");
    email_box.textContent = doctor.emailAddress;

    const location_box = document.getElementById("location");
    location_box.textContent = doctor.location;

    const phoneNumber_box = document.getElementById("phoneNumber");
    phoneNumber_box.textContent = doctor.phoneNumber;
}

document.addEventListener('DOMContentLoaded', render);