// Exercice 4.1
var valeur = 0;

function Ajout10(){
	valeur += 10;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}
function Divise5(){
	valeur /= 5;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}
function Multiplie8(){
	valeur *= 8;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}
function Soustrait2(){
	valeur -= 2;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}
function Combine10Moins2(){
	valeur += 10;
	valeur -= 2;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}
function Reset(){
	valeur = 0;
	document.getElementById('result-exo-4-1').innerHTML = valeur;
}