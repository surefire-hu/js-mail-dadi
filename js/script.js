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
    const emailUtente = document.getElementById('emailInput').value;
    const resultDiv = document.getElementById('result');
  
    // Controlla se l'email è nella lista delle email autorizzate
    if (emailAutorizzate.includes(emailUtente)) {
        resultDiv.textContent = "Accesso consentito. Benvenuto!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Accesso negato. La tua email non è autorizzata.";
        resultDiv.style.color = "red";
    }
  }