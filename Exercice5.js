// Exercice 5
function Gethasard(){
	var nombreRandom = Math.floor(Math.random() * (1001,50) + 50);
	document.getElementById('result-exo-5').innerHTML = nombreRandom;
}
window.onload = Gethasard();