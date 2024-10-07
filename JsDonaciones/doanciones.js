const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tech4good'
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Ruta para obtener todos los donantes
app.get('/api/donantes', (req, res) => {
  const query = 'SELECT * FROM Donantes';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Ruta para agregar un nuevo donante
app.post('/api/donantes', (req, res) => {
  const { nombre, tipo, contacto, direccion } = req.body;
  const query = 'INSERT INTO Donantes (nombre, tipo, contacto, direccion) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, tipo, contacto, direccion], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Donante agregado exitosamente', idDonante: result.insertId });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



