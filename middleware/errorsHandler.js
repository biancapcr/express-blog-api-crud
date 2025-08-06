// definisco il middleware errorsHandler
const errorsHandler = (err, req, res, next) => {
  // stampo l'errore completo in console
  console.log(err);
  // risposta con status 404 e il messaggio dell'errore in json
  res.status(404).json({
    error: err.message
  });
};

// esporto il middleware
module.exports = errorsHandler;