// document.writeln("La tua password supersicura è: " + window.prompt("Scrivi il tuo nome") + window.prompt("Scrivi il tuo cognome") + window.prompt("Scrivi il tuo colore preferito") + "19");

var name = window.prompt("Scrivi il tuo nome");
var surname = window.prompt("Scrivi il tuo cognome");
var color = window.prompt("Scrivi il tuo colore preferito");
document.getElementById("my-id").innerHTML = "La tua password supersicura è: " + name + surname + color + "19";
