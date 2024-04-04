// crear una publicación
function createPost(name, message, imageURL) {
    return `
        <div class="post">
            <h2>${name}</h2>
            <p>${message}</p>
            <img src="${imageURL}" alt="${name}">
        </div>
    `;
}

// Función para generar las 826 publicaciones
function generatePosts() {
    const postsContainer = document.getElementById('posts-container'); 
    
    for (let i = 1; i <= 826; i++) {
        const name = `Personaje ${i}`;
        const message = "Esta es mi publicación número " + i + ". Esto es una prueba de generación de relleno por medio de funciones y ciclos.";
        const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
        
        const postHTML = createPost(name, message, imageURL);
        postsContainer.innerHTML += postHTML;

    }
}
window.onload = generatePosts;
