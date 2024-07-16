const emailAutorizzate = [
    "utente1@scl.com",
    "utente2@scl.com",
    "utente3@scl.com",
    "owner@scl.com",
    "co-admin@scl.com",
    "admin@scl.com"
  ];
  
  function controllaAccesso() {
    // Chiedi all'utente la sua email
    const emailUtente = prompt("Per favore, inserisci la tua email:");
  
    // Controlla se l'email è nella lista delle email autorizzate
    if (emailAutorizzate.includes(emailUtente)) {
      console.log("Accesso consentito. Benvenuto!");
    } else {
      console.log("Accesso negato. La tua email non è autorizzata.");
    }
  }
  
  // Esegui la funzione di controllo
  controllaAccesso();
