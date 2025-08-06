// definisco il middleware notFound
const notFound = (req, res, next) => {
  // imposto lo status code su 404 e invio un messaggio
  res.status(404).json({
    error:   "404 - Not Found",
    message: "Spiacenti, la risorsa richiesta non esiste"
  });
};

module.exports = notFound;