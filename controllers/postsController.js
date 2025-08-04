// importo array di post da /data/posts.js
const data = require('../data/posts.js');

// mostro tutti i post
const index = (req, res) => {
  let filteredArray = data;
  console.log(data);
  res.send(filteredArray);
};

// creo nuovo post
const create = (req, res) => {
  res.send(`Creazione di un nuovo post`);
};
// modifica
const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post con id ${req.params.id}`);
};
// update
const update = (req, res) => {
  const id = req.params.id;
  res.send(`Aggiornamento del post con id ${req.params.id}`);
};
