import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { email } = req.query;

    // Configuración de la API
    const API_KEY = 'd2830a151e2d5ae79ee56b3bf8035c9728d27a1c75fbd2fe89eff5f11c57f078c0f93ae1';
    const API_URL = 'https://sedsa.api-us1.com/api/3/contacts';

    const response = await fetch(`${API_URL}?email=${email}`, {
        headers: {
            'Api-Token': API_KEY,
        },
    });

    if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(response.status).json({ error: 'Error en la solicitud' });
    }
}
