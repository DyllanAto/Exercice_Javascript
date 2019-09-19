// Exercice 12
function Km(){
	var km = document.getElementById('input1').value;
	var temps = (km / 1000) * 60;
	document.getElementById('temps').innerHTML = temps;
}

function Temps(){
	var temps2 = document.getElementById('input2').value;
	var km2 = (temps2 * 1000) / 60;
	document.getElementById('km2').innerHTML = km2;
}