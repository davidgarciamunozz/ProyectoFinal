export const obtenerDoctores = async () => {
    const response = await fetch('https://raw.githubusercontent.com/davidgarciamunozz/ProyectoFinal/feature/David/data.json');
    const data = await response.json();
    return data;
};

export class Doctor {
    constructor(nombre, apellido, genero, roll, disponibilidad, imagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.roll = roll;
        this.disponibilidad = disponibilidad;
        this.imagen = imagen;
    }

    render = () => {
        const doctor_box = document.createElement("div");
         doctor_box.classList.add("main_doctor");

        const doctor_box_description = document.createElement("div");
        doctor_box_description.classList.add("main_doctor_description");

        const doctor_img = document.createElement("img");
         doctor_img.classList.add("doctor_img");
         doctor_img.src = this.imagen;
         doctor_img.alt = `${this.nombre} ${this.apellido}`;


         const title = document.createElement("h2");
         title.classList.add("doctor_title");
         title.textContent = `${this.nombre} ${this.apellido}`;


         const doctor_info = document.createElement("p");
         doctor_info.classList.add("doctor_info");
         doctor_info.textContent = this.roll;


        doctor_box.appendChild(doctor_box_description);
        doctor_box.appendChild(doctor_img);
        doctor_box_description.appendChild(title);
        doctor_box_description.appendChild(doctor_info);



         return doctor_box;

    }
   



}


