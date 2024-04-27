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

        const doctor_agrupation_img_description = document.createElement("div");
        doctor_agrupation_img_description.classList.add("main_doctor_agrupation_img_description");


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

        const availability = document.createElement("p");
        availability.classList.add("availability");
        availability.textContent = this.disponibilidad;

        const doctor_box_description_aside = document.createElement("div");
        doctor_box_description_aside.classList.add("main_doctor_description_aside");

        const agendar = document.createElement("button");
        agendar.classList.add("agendar");
        agendar.textContent = "Agendar Consulta";

        
        const aside_decription = document.createElement("div");
        aside_decription.classList.add("aside_decription");

        const aside_reviews_text = document.createElement("p");
        aside_reviews_text.classList.add("aside_reviews_text");
        aside_reviews_text.textContent = "Reviews";

        const aside_reviews_icons = document.createElement("p");
        aside_reviews_icons.classList.add("aside_reviews_icons");
        aside_reviews_icons.textContent = "⭐⭐⭐⭐⭐";

        const aside_favorite_icon = document.createElement("p");
        aside_favorite_icon.classList.add("aside_favorite");
        aside_favorite_icon.textContent = "❤️";

        const aside_favorite_text = document.createElement("p");
        aside_favorite_text.classList.add("aside_favorite_text");
        aside_favorite_text.textContent = "Añadir a Favoritos";

        const aside_boxOne = document.createElement("div");
        aside_boxOne.classList.add("aside_boxOne");

        aside_boxOne.appendChild(aside_favorite_icon);
        aside_boxOne.appendChild(aside_favorite_text);
        doctor_box_description_aside.appendChild(aside_boxOne);
        doctor_box_description_aside.appendChild(aside_decription);
        aside_decription.appendChild(aside_reviews_text);
        aside_decription.appendChild(aside_reviews_icons);
        doctor_box_description_aside.appendChild(agendar);
        doctor_agrupation_img_description.appendChild(doctor_box_description);
        doctor_box.appendChild(doctor_agrupation_img_description);
        doctor_box.appendChild(doctor_box_description_aside);
        doctor_agrupation_img_description.appendChild(doctor_img);
        doctor_box_description.appendChild(title);
        doctor_box_description.appendChild(doctor_info);
        doctor_box_description.appendChild(availability);


         return doctor_box;

    }
   



}


