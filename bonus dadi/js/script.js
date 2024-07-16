// Funzione per generare un numero casuale da 1 a 6
function lanciaDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Lancio dei dadi
let tiroGiocatore = lanciaDado();
let tiroComputer = lanciaDado();

// Stampa dei risultati
console.log("Giocatore ha tirato: " + tiroGiocatore);
console.log("Computer ha tirato: " + tiroComputer);

// Confronto e determinazione del vincitore
if (tiroGiocatore > tiroComputer) {
    console.log("Il giocatore vince!");
} else if (tiroGiocatore < tiroComputer) {
    console.log("Il computer vince!");
} else {
    console.log("È un pareggio!");
}
