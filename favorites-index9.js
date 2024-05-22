import { obtenerDoctores, obtenerUsuarioActivo } from "./utils.js";

// obtener doctores de favoritos con el id almacenado en los favoritos del usuario
const obtenerDoctoresFavoritos = async () => {
    const usuarioActivo = obtenerUsuarioActivo();
    console.log(usuarioActivo);
    const doctoresFavoritos = usuarioActivo.favoritos;
    console.log(doctoresFavoritos);
    const doctores = await obtenerDoctores();
    return doctores.filter((doctor) => doctoresFavoritos.includes(doctor.id));

}


export const renderFavorites = async () => {

 if (!localStorage.getItem('user-active')) {
 window.location.href = 'DOM4.html';
 }



const logoutButton_top = document.getElementById("logout");
const logoutButton_bottom = document.getElementById("logout-bottom");
const usuarioActivoKey = 'user-active';

logoutButton_top.addEventListener("click", () => {
localStorage.removeItem(usuarioActivoKey);
window.location.href = 'DOM4.html';
});
logoutButton_bottom.addEventListener("click", () => {
localStorage.removeItem(usuarioActivoKey);
window.location.href = 'DOM4.html';
});




    const usuarioActivo = obtenerUsuarioActivo();
    if (!usuarioActivo) {
        window.location.href = 'DOM4.html';
    }
    const welcomeDiv = document.getElementById("main_name");
    const userName = obtenerUsuarioActivo().name;
    welcomeDiv.innerText = 'Bienvenido ' + userName;

    const doctorList = document.getElementById("userFavoritesContainer");
    doctorList.innerHTML = '';

    const doctoresFavoritos = await obtenerDoctoresFavoritos();
    console.log(doctoresFavoritos);
    //renderizar cada doctor en la lista 
    doctoresFavoritos.forEach((doctor) => {
        const doctorItem = document.createElement('div');
        doctorItem.classList.add('doctor-item');
        doctorItem.innerHTML = ``;
        const doctor_box = document.createElement('div');
        doctor_box.classList.add('main_doctor');

        const doctor_agrupation_img_description = document.createElement('div');
        doctor_agrupation_img_description.classList.add('main_doctor_agrupation_img_description');

        const doctor_box_description = document.createElement('div');
        doctor_box_description.classList.add('main_doctor_description');

        const doctor_img = document.createElement('img');
        doctor_img.classList.add('doctor_img');
        doctor_img.src = doctor.image;
        doctor_img.alt = doctor.firstname;

        const title = document.createElement('h2');
        title.classList.add('doctor_title');
        title.textContent = `${doctor.firstname} ${doctor.lastname}`;

        const doctor_info = document.createElement('p');
        doctor_info.classList.add('doctor_info');
        doctor_info.textContent = doctor.role;

        const availability = document.createElement('p');
        if(doctor.available === "Disponible"){
            availability.classList.add("availability");
        } else {
            availability.classList.add("availability_no");
        }   
        availability.textContent = doctor.available;

        const doctor_box_description_aside = document.createElement('div');
        doctor_box_description_aside.classList.add('main_doctor_description_aside');

        const agendar = document.createElement('button');
        agendar.classList.add('agendar');
        agendar.textContent = 'Agendar Consulta';

        const aside_description = document.createElement('div');
        aside_description.classList.add('aside_description');
        
        const aside_reviews_text = document.createElement('p');
        aside_reviews_text.classList.add('aside_reviews_text');
        aside_reviews_text.textContent = 'Reviews';

        const aside_reviews_icons = document.createElement('p');
        aside_reviews_icons.classList.add('aside_reviews_icons');

        const review_agroupation = document.createElement('div');
        review_agroupation.classList.add('review_agroupation');

        const svg_img = document.createElement('img');
        svg_img.src = 'assets/estrella.svg';
        svg_img.classList.add('reviewStar');
        review_agroupation.appendChild(svg_img);

        const svg_img1 = document.createElement('img');
        svg_img1.src = 'assets/estrella.svg';
        svg_img1.classList.add('reviewStar');
        review_agroupation.appendChild(svg_img1);

        const svg_img2 = document.createElement('img');
        svg_img2.src = 'assets/estrella.svg';
        svg_img2.classList.add('reviewStar');
        review_agroupation.appendChild(svg_img2);

        const svg_img3 = document.createElement('img');
        svg_img3.src = 'assets/estrella.svg';
        svg_img3.classList.add('reviewStar');
        review_agroupation.appendChild(svg_img3);

        const svg_img4 = document.createElement('img');
        svg_img4.src = 'assets/estrella.svg';
        svg_img4.classList.add('reviewStar');
        review_agroupation.appendChild(svg_img4);
        
        const aside_favorite_icon = document.createElement('div');
        aside_favorite_icon.classList.add('aside_favorite');

        const svg_imgFavorite = document.createElement('img');
        svg_imgFavorite.src = 'assets/heart.svg';

        svg_imgFavorite.classList.add('favorite');
        aside_favorite_icon.appendChild(svg_imgFavorite);

        const aside_favorite_text = document.createElement('p');
        aside_favorite_text.classList.add('aside_favorite_text');
        aside_favorite_text.textContent = 'Remover de favoritos';

        const aside_boxOne = document.createElement('div');
        aside_boxOne.classList.add('aside_boxOne');

        


        doctor_box_description_aside.appendChild(aside_boxOne);
        doctor_box_description_aside.appendChild(aside_description);
        doctor_box_description_aside.appendChild(agendar);
        aside_description.appendChild(aside_reviews_text);
        aside_description.appendChild(aside_reviews_icons);
        aside_boxOne.appendChild(aside_favorite_icon);
        aside_boxOne.appendChild(aside_favorite_text);    
        doctorList.appendChild(doctorItem); 
        doctorItem.appendChild(doctor_box);
        doctor_box.appendChild(doctor_agrupation_img_description);
        doctor_agrupation_img_description.appendChild(doctor_img);
        doctor_agrupation_img_description.appendChild(doctor_box_description);
        doctor_box_description.appendChild(title);
        doctor_box_description.appendChild(doctor_info);
        doctor_box_description.appendChild(availability);
        doctor_box.appendChild(doctor_agrupation_img_description);
        doctor_box.appendChild(doctor_box_description_aside);
        aside_description.appendChild(review_agroupation);
         
        return doctorItem;
    
    });
    
    




};

document.addEventListener('DOMContentLoaded', renderFavorites);

export function actualizarPagina() {
    renderFavorites();
}