// email autorizzate
const emailAutorizzate = [
    "utente1@scl.com",
    "utente2@scl.com",
    "utente3@scl.com",
    "owner@scl.com",
    "co-admin@scl.com",
    "admin@scl.com"
  ];
  
  function controllaAccesso() {
    const emailUtente = document.getElementById('emailInput').value;
    const resultDiv = document.getElementById('result');
    let accessoConsentito = false;
// ciclo per controllare tutti gli array
    for (let i = 0; i < emailAutorizzate.length; i++) {
        if (emailUtente === emailAutorizzate[i]) {
            accessoConsentito = true;
            break;//questo serve per stoppare il ciclo
        }
    }

    if (accessoConsentito) {
        resultDiv.textContent = "Accesso consentito. Benvenuto!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Accesso negato. La tua email non è autorizzata.";
        resultDiv.style.color = "red";
    }
  }