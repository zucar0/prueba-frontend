// Importación de Express
const express = require('express');
// Se crea la instancia de la aplicación de express y se asigna a la variable app
const app = express();

app.use(express.json()); //Middleware (para analizar solicitudes en formato Json)

let contacts = []; // Arreglo para contactos
let users = [] // Array para usuarios

// Endpoint para crear un nuevo usuario
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  // Endpoint para obtener todos los usuarios
  app.get('/users', (req, res) => {
    res.json(users);
  });
  
  // Endpoint para obtener un usuario por su ID
  app.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find((user) => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  
  // Endpoint para obtener los contactos de un usuario
  app.get('/users/:userId/contacts', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userContacts = contacts.filter((contact) => contact.userId === userId);
    res.json(userContacts);
  });
  
  // Endpoint para agregar un contacto a un usuario
  app.post('/users/:userId/contacts', (req, res) => {
    const userId = parseInt(req.params.userId);
    const newContact = { ...req.body, userId };
    contacts.push(newContact);
    res.status(201).json(newContact);
  });
   

//Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
