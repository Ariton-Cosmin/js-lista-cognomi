var arr_cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli", "Blu"];
var cognome_utente = prompt("inserisci cognome");
arr_cognomi.push(cognome_utente);

var cognomiSorted = arr_cognomi.slice();
cognomiSorted.sort();

console.log(arr_cognomi);
console.log(cognomiSorted);

var cognomeTrovato = false;
var counter = 0;
var posUtente;

while (cognomeTrovato) {
    var cognome = cognomiSorted[counter];

    if (cognomeTrovato === cognome_utente) {
        cognomeTrovato = true;
        posUtente = counter + 1;
    }
    counter++;
}

var containerLista = document.getElementById("lista");

for (var i = 0; i < cognomiSorted.length; i++) {
    var cognomeLista = cognomiSorted[i];
    console.log(cognomeLista);
    containerLista.innerHTML += "<li>" + cognomeLista + "</li>";
}
console.log(containerLista);

document.getElementById("posizione").innerHTML = cognome_utente + " è in posizione " + posUtente;