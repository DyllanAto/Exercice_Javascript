// Exercice 3
function GetDivision(){
	var nb_1 = 82;
	var nb_2 = 8;
	var result = eval(nb_1 % nb_2);
	document.getElementById('result-exo-3').innerHTML = result;
}
window.onload = GetDivision();
