export const obtenerDoctores = async () => {
    const response = await fetch('https://raw.githubusercontent.com/davidgarciamunozz/ProyectoFinal/feature/David/data.json');
    const data = await response.json();
    return data;
};