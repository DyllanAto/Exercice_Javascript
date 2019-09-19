// Exercice 8
function GetCalcul(){
	var nb_1 = document.getElementById('input1').value;
	var nb_2 = document.getElementById('input2').value;
	var nb_3 = document.getElementById('input3').value;
	var result1 = nb_1 / nb_2;
	var result2 = result1 % nb_3;
	document.getElementById('result-exo-8').innerHTML = result2;
}