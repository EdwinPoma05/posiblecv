const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',        // Reemplaza con tu usuario de PostgreSQL
    host: 'localhost',         // Usualmente 'localhost'
    database: 'curriculum_db',  // Reemplaza con tu nombre de base de datos
    password: 'edwin05', // Reemplaza con tu contraseña
    port: 5432,                // Puerto por defecto de PostgreSQL
});

// Prueba de conexión
pool.connect()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('Error de conexión', err));

// Rutas
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a mi currículum web</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


