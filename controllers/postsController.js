// importo array di post da /data/posts.js
const data = require('../data/posts.js');

// mostro tutti i post
const index = (req, res) => {
  let filteredArray = data;
  console.log(data);
  res.send(filteredArray);
};

//show
const show = (req, res) => {
  const id = req.params.id;
  // usando == per confronto, cerco il post corrispondente all'ID nell'array
  const post = posts.find(p => p.id == id);
  if (!post) {
    // se non trova il post, risponde 404 con JSON di errore
    return res.status(404).json({
      error: '404 not found',
      message: 'post non trovato'
    });
  }
  res.json(post);
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
