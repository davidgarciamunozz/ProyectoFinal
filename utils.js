export const obtenerDoctores = async () => {
    const response = await fetch('https://raw.githubusercontent.com/davidgarciamunozz/ProyectoFinal/main/data.json');
    const data = await response.json();
    return data;
};





export const obtenerDoctorPorId = async (id) => {
    const doctores = await obtenerDoctores();

    for (const doctor of doctores) {
        if (doctor.id === id) {
            return doctor;
        }
    }
    throw new Error('Doctor no encontrado');
    
}

export class Doctor {
    constructor(nombre, apellido, genero, roll, disponibilidad, imagen, id,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.roll = roll;
        this.disponibilidad = disponibilidad;
        this.imagen = imagen;
        this.id = id;
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
         doctor_img.src = `${this.imagen}`;
         doctor_img.alt = `${this.nombre} ${this.apellido}`;

  
         const title = document.createElement("h2");
         title.classList.add("doctor_title");
         title.textContent = `${this.nombre} ${this.apellido}`;


         const doctor_info = document.createElement("p");
         doctor_info.classList.add("doctor_info");
         doctor_info.textContent = this.roll;

        const availability = document.createElement("p");
        if(this.disponibilidad === "Disponible"){
            availability.classList.add("availability");
        }else{
            availability.classList.add("availability_no");
        }
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

        const review_agroupation = document.createElement("div");
        review_agroupation.classList.add("review_agroupation");
        aside_decription.appendChild(review_agroupation);


        const svg_img = document.createElement("i");
        svg_img.classList.add("fa-regular");
        svg_img.classList.add("fa-star");
        svg_img.style.color = "#FFD438";
        review_agroupation.appendChild(svg_img);


        const svg_img1 = document.createElement("i");
        svg_img1.classList.add("fa-regular");
        svg_img1.classList.add("fa-star");
        svg_img1.style.color = "#FFD438";
        review_agroupation.appendChild(svg_img1);

        const svg_img2 = document.createElement("i");
        svg_img2.classList.add("fa-regular");
        svg_img2.classList.add("fa-star");
        svg_img2.style.color = "#FFD438";
        review_agroupation.appendChild(svg_img2);

        const svg_img3 = document.createElement("i");
        svg_img3.classList.add("fa-regular");
        svg_img3.classList.add("fa-star");
        svg_img3.style.color = "#FFD438";
        review_agroupation.appendChild(svg_img3);

        const svg_img4 = document.createElement("i");
        svg_img4.classList.add("fa-regular");
        svg_img4.classList.add("fa-star");
        svg_img4.style.color = "#FFD438";
        review_agroupation.appendChild(svg_img4);


        const aside_favorite_icon = document.createElement("div");
        aside_favorite_icon.classList.add("aside_favorite");
        
        const svg_imgFavorite = document.createElement("i");
        svg_imgFavorite.classList.add("fa-regular");
        svg_imgFavorite.classList.add("fa-heart");
        svg_imgFavorite.style.color = "#f51707";
        aside_favorite_icon.appendChild(svg_imgFavorite);

        const aside_favorite_text = document.createElement("p");
        aside_favorite_text.classList.add("aside_favorite_text");
        aside_favorite_text.textContent = "Añadir a Favoritos";

        const aside_boxOne = document.createElement("div");
        aside_boxOne.classList.add("aside_boxOne");
        


        aside_boxOne.appendChild(aside_favorite_icon);
        aside_boxOne.appendChild(aside_favorite_text);
        // aside_boxOne.addEventListener("click", () => {
        //   window.location.href = `DOM9.html`;
        // });
        // aside_boxOne.addEventListener("click", () => {
        //     const favoritos = localStorage.getItem('favoritos');
        //     const favoritosArray = JSON.parse(favoritos) || [];
        
        //     const doctor = {
        //         id: this.id,
        //         nombre: this.nombre,
        //         apellido: this.apellido,
        //         genero: this.genero,
        //         roll: this.roll,
        //         disponibilidad: this.disponibilidad,
        //         imagen: this.imagen
        //     };
        
        //     // Encontrar el índice del doctor en el arreglo de favoritos
        //     const index = favoritosArray.findIndex(fav => fav.id === doctor.id);
        
        //     if (index !== -1) {
        //         // Si el doctor ya está en favoritos, eliminarlo
        //         favoritosArray.splice(index, 1);
        //     } else {
        //         // Si el doctor no está en favoritos, agregarlo
        //         favoritosArray.push(doctor);
        //     }
        
        //     // Guardar el arreglo actualizado en localStorage
        //     localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
        // });
        aside_boxOne.addEventListener("click", async () => {
            const user = obtenerUsuarioActivo();
            if (!user) {
                console.error('No hay usuario activo');
                return;
            }
            
            // Obtener la lista de todos los usuarios
            const usuarios = obtenerUsuarios();
        
            // Encontrar al usuario activo en la lista de usuarios
            const usuarioIndex = usuarios.findIndex(u => u.id === user.id);
            if (usuarioIndex === -1) {
                console.error('Usuario activo no encontrado en la lista de usuarios');
                return;
            }
        
            // Obtener el ID del doctor actual
            const doctorId = this.id;
        
            // Toggle para añadir o quitar de favoritos
            const favoritos = user.favoritos || [];
            const doctorIndex = favoritos.indexOf(doctorId);
        
            if (doctorIndex !== -1) {
                // Si el doctor ya está en favoritos, eliminarlo
                favoritos.splice(doctorIndex, 1);
            } else {
                // Si el doctor no está en favoritos, agregarlo
                favoritos.push(doctorId);
            }
        
            // Actualizar los favoritos del usuario activo
            user.favoritos = favoritos;
        
            // Actualizar la lista de usuarios en localStorage
            usuarios[usuarioIndex] = user;
            localStorage.setItem('user', JSON.stringify(usuarios));
            
            
        });
        
        doctor_box_description_aside.appendChild(aside_boxOne);
        doctor_box_description_aside.appendChild(aside_decription);
        aside_decription.appendChild(aside_reviews_text);
        aside_decription.appendChild(aside_reviews_icons);
        doctor_box_description_aside.appendChild(agendar);
        doctor_agrupation_img_description.appendChild(doctor_box_description);
        doctor_box.appendChild(doctor_agrupation_img_description);
        doctor_box.appendChild(doctor_box_description_aside);
        agendar.addEventListener("click", () => {
            window.location.href = `DOM8.html?id=${this.id}`;
        });
        doctor_agrupation_img_description.appendChild(doctor_img);
        doctor_box_description.appendChild(title);
        doctor_box_description.appendChild(doctor_info);
        doctor_box_description.appendChild(availability);




        


         return doctor_box;

    };


};


    //export const for obtain the doctors that are in the favorites
    export const obtenerDoctoresfavoritos = async (id) => {
        const doctores = await obtenerDoctores();
        const favoritos = localStorage.getItem('favoritos');
        const favoritosArray = JSON.parse(favoritos) || [];
    
        return doctores.filter(doctor => favoritosArray.some(fav => fav.id === doctor.id));
    }
    
    

    
    
    
    //export const for obtain the users that are registered
    export const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem('user');
    if (!usuarios){
        return [];
    }
    return JSON.parse(usuarios);
};


//export const for obtain the active user
    export const obtenerUsuarioActivo = () => {
    const usuarioActivo = parseInt(localStorage.getItem('user-active'));
    const usuarios = obtenerUsuarios();
    // console.log(usuarioActivo); 
    // console.log(usuarios); 

    for (const usuario of usuarios){
        if (usuario.id === usuarioActivo){
            // console.log(usuario);
            return usuario;
        }
    }
    return null;
};
export const logout = () => {
    localStorage.removeItem(usuarioActivoKey);    
};

