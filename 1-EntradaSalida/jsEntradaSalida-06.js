/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//IDs - txtIdNumeroUno txtIdNumeroDos
	//alert("ok");

	var numero_01;
	var numero_02;
	var resultado;

	numero_01 = document.getElementById("txtIdNumeroUno").value;
	numero_02 = document.getElementById("txtIdNumeroDos").value;

	//Al ingresar los datos en la txtBox se guardan como caracteres
	//por lo que necesito parseInt para transformarlos en enteros y así poder sumarlos.
	resultado = parseInt(numero_01)+parseInt(numero_02);

	alert("El resultado de la suma es: "+resultado);
}

