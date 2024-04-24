import { obtenerDoctores } from "./utils.js";

const render = async () => {
    const crearDoctor = (nombre, apellido, genero, roll, disponibilidad, imagen ) => {
        const main = document.getElementById("main");

        const doctor_box = document.createElement("div");
        doctor_box.classList.add("main_doctor");

        const doctor_img = document.createElement("img");
        doctor_img.classList.add("doctor_img");
        doctor_img.src = imagen;
        doctor_img.alt = `${nombre} ${apellido}`;

        const title = document.createElement("h2");
        title.classList.add("doctor_title");
        title.textContent = `${nombre} ${apellido}`;

        const doctor_info = document.createElement("p");
        doctor_info.classList.add("doctor_info");
        doctor_info.textContent = roll;

       
        doctor_box.appendChild(doctor_img);
        doctor_box.appendChild(title);
        doctor_box.appendChild(doctor_info);
        main.appendChild(doctor_box);



}

const  doctores = await obtenerDoctores();
for (const doctor of doctores) {
 crearDoctor( doctor.firstname, doctor.lastname, doctor.genre, doctor.role, doctor.available, doctor.image  );
 }

};


document.addEventListener('DOMContentLoaded', render);