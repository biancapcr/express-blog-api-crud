// importo array di post da /data/posts.js
const data = require('../data/posts.js');

// mostro tutti i post in formato json
//const index = (req, res) => {
  //res.json(posts);
//};
const index = (req, res) => {
  // recupero il parametro tag dalla query string
  const tag = req.query.tag;
  // definisco una variabile che inizialmente contiene tutti i post
  let filteredPosts = posts;
  // se tag è stato specificato, applico il filtro
  if (tag) {
    filteredPosts = posts.filter(item =>
      // includo solo i post il cui array 'tags' contiene esattamente il valore di tag
      item.tags.includes(tag)
    );
  }
  // restituisco l’array in json
  res.json(filteredPosts);
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

//destroy
const destroy = (req, res) => {
  // prelevo ID del post dai parametri della richiesta
  const id = req.params.id;
  // trovo l'indice del post da eliminare nell'array
  const idx = posts.findIndex(p => p.id == id);
  // se non esiste, rispondo con 404 Not Found in json
  if (idx === -1) {
    return res.status(404).json({
      error: '404 not found',
      message: 'post non trovato'
    });
  }
  // rimuovo il post dall'array usando splice
  posts.splice(idx, 1);
  // stampa in console l'array aggiornato per debug
  console.log("Lista post aggiornata:", posts);
  // risposta con 204 No Content
  res.status(204).end();
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

module.exports= {
  index,
  show,
  create,
  modify,
  update,
  destroy
};
