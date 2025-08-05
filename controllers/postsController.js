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
//const create = (req, res) => {
  //res.send(`Creazione di un nuovo post`);
//};
// creo nuovo post (store)
//const create = (req, res) => {
    // stampo in console i dati arrivati nel body
  //console.log('Dati ricevuti:', req.body);
  // per ora risposta con status 201 e rimando indietro ciò che è stato ricevuto
  //res.status(201).json(req.body);
//};
const create = (req, res) => {
  // definisco il nuovo id prendendo l'ultimo elemento e incrementandolo
  const newId = data[data.length - 1].id + 1;
  // destructuring dei campi dal body della request
  const { title, content, image, tags } = req.body;
    // definire il nuovo oggetto post
  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags
  };

  // inserisco il nuovo post nell'array esistente
  data.push(newPost);
  // risposta con l'array aggiornato in formato json
  res.json(data);
};

// modifica
const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post con id ${req.params.id}`);
};

// update
//const update = (req, res) => {
  //const id = req.params.id;
  //res.send(`Aggiornamento del post con id ${req.params.id}`);
//};
const update = (req, res) => {
  // prendo l'id e lo converto in intero
  const id = parseInt(req.params.id, 10);

  // cerco post nell'array
  const post = data.find(post => post.id === id);

  // se non esiste, restituisco 404 con json di errore
  if (!post) {
    res.status(404);
    return res.json({
      status: 404,
      error: "not found",
      message: "cannot update inexistent post"
    });
  }

  // sovrascrizione dei campi del post con quelli ricevuti in body
  post.title   = req.body.title;
  post.content = req.body.content;
  post.image   = req.body.image;
  post.tags    = req.body.tags;

  // invio indietro il post aggiornato in json
  res.json(post);
};


module.exports= {
  index,
  show,
  create,
  modify,
  update,
  destroy
};
