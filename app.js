//console.log("Hello World");
// importo express
const express = require('express');

// creo l’applicazione
const app = express();

// imposto la porta
const port = 3000;

// importo file router
const postRouter = require('./routers/postRouter.js');

// abilito asset statici dalla cartella “public”
app.use(express.static('public'));

// uso il file di router per definire le rotte dei post
app.use('/posts', postRouter);

// definizione rotta base
app.get('/', (req, res) => {
  res.send('Benvenuto nel mio blog');
});

// avvio server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});