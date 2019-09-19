// Exercice 11

var nombreRandom = Math.floor(Math.random() * (1000 - 1.05) + 1.05);

function Cote(){
	document.getElementById('cote').innerHTML = nombreRandom;
}

function Benefices(){
	var montant = document.getElementById('input1').value;
	var valeur = montant * nombreRandom;
	document.getElementById('benefice').innerHTML = valeur;
}