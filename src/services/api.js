const API_URL = 'https://api.ejemplo.com';

export const getData = async () => {
    try {
        const response = await fetch(`${API_URL}/datos`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};