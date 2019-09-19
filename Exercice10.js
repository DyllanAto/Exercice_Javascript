// Exercice 10

var valeur = '';

function Mot(){
	var mot = document.getElementById('input1').value;
	valeur += mot+" ";
	document.getElementById('result-exo-9').innerHTML = valeur;
}

function Reset(){
	valeur = '';
	document.getElementById('result-exo-9').innerHTML = valeur;
}