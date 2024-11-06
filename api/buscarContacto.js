// /api/buscarContacto.js
export default async function handler(req, res) {
    const { email } = req.query;

    // Simulación de búsqueda (aquí puedes integrar una base de datos o API real)
    const contactosSimulados = ["contacto1@example.com", "contacto2@example.com"];

    if (contactosSimulados.includes(email)) {
        res.status(200).json({ contacts: [email] });
    } else {
        res.status(200).json({ contacts: [] });
    }
}
