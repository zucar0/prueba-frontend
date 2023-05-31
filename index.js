// Importación de Express
const express = require('express');
// Se crea la instancia de la aplicación de express y se asigna a la variable app
const app = express();

app.use(express.json()); //Middleware (para analizar solicitudes en formato Json)

let contacts = []; // Arreglo para los contactos

// Definición de Endpoint para obtener todos los contactos
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Definición de endpoint para obtener un contacto por su ID (GET)
app.get('/contacts/:contactId', (req, res) => {
  const contactId = parseInt(req.params.contactId);
  const contact = contacts.find((contact) => contact.id === contactId);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ error: 'El contacto no fue encontrado' });
  }
});

// Desfinición de endpoint para crear un nuevo contacto (POST)
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Definición de endpoint para actualizar un contacto existente (PUT)
app.put('/contacts/:contactId', (req, res) => {
  const contactId = parseInt(req.params.contactId);
  const updatedContact = req.body;
  let contactUpdated = false;
  contacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      contactUpdated = true;
      return { ...contact, ...updatedContact };
    }
    return contact;
  });
  if (contactUpdated) {
    res.json({ message: 'Contacto actualizado.' });
  } else {
    res.status(404).json({ error: 'Contacto no encontrado.' });
  }
});

// Endpoint para eliminar un contacto
app.delete('/contacts/:contactId', (req, res) => {
  const contactId = parseInt(req.params.contactId);
  const initialLength = contacts.length;
  contacts = contacts.filter((contact) => contact.id !== contactId);
  if (contacts.length < initialLength) {
    res.json({ message: 'Contacto borrado.' });
  } else {
    res.status(404).json({ error: 'Contacto no encontrado' });
  }
});

//Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
