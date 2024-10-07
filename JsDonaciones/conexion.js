

let mysql = require("mysql");

let connection = mysql.createConnection({
host: "localhost",
database: "tech4good", 
user:"root",
password:""
}) 

    connection.connect(function(err) {
        if (err) throw err; 
     else{
        console.log('Conexión a la base de datos es exitosa.');

     } // not important for this case, but good practice for Node.js
       
    });
    


    connection.end();




























/*const formDonante = document.getElementById('formDonante');
const donantesTableBody = document.getElementById('donantesTableBody');

// Función para cargar los donantes desde el servidor
function cargarDonantes() {
    fetch('http://localhost:3000/api/donantes')
        .then(response => response.json())
        .then(data => {
            donantesTableBody.innerHTML = '';
            data.forEach(donante => {
                const row = `<tr>
                    <td>${donante.nombre}</td>
                    <td>${donante.tipo}</td>
                    <td>${donante.contacto}</td>
                    <td>${donante.direccion}</td>
                    <td>${donante.fechaRegistro}</td>
                </tr>`;
                donantesTableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error al cargar donantes:', error));
}

// Evento para enviar el formulario de donantes
formDonante.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formDonante);
    const donante = Object.fromEntries(formData);

    fetch('http://localhost:3000/api/donantes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donante)
    })
    .then(response => response.json())
    .then(() => {
        formDonante.reset();
        cargarDonantes();
    })
    .catch(error => console.error('Error al agregar donante:', error));
});

// Cargar donantes al iniciar
cargarDonantes();*/
