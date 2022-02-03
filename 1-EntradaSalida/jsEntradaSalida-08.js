/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//Ids: txtIdNumeroDividendo txtIdNumeroDivisor

function SacarResto()
{
	var numero_dividendo;
	var numero_divisor;
	var resultado;

	numero_dividendo = document.getElementById("txtIdNumeroDividendo").value;
	numero_divisor = document.getElementById("txtIdNumeroDivisor").value;

	resultado = parseInt(numero_dividendo)%parseInt(numero_divisor);
	alert("El resto es: "+resultado);
}
