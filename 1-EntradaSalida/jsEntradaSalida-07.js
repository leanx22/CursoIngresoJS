/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Ids: txtIdNumeroUno txtIdNumeroDos
	
	//Declaración de variables.
	var numero_01;
	var numero_02;
	var resultado;

	//intenté poner el código por fuera para no llamarlo en cada función pero salió mal.
	//numero_01 = document.getElementById("txtIdNumeroUno").value;
	//numero_02 = document.getElementById("txtIdNumeroDos").value;

function sumar()
{		
	//Guardo en las variables los números ingresados.
	numero_01 = document.getElementById("txtIdNumeroUno").value;
	numero_02 = document.getElementById("txtIdNumeroDos").value;
	
	//Realizo la operación.
	resultado = parseInt(numero_01)+parseInt(numero_02);
	//Muestro el resultado de la operación mediante un alert.
	alert("La suma es: "+resultado);
}

function restar()
{
	//Guardo en las variables los números ingresados.
	numero_01 = document.getElementById("txtIdNumeroUno").value;
	numero_02 = document.getElementById("txtIdNumeroDos").value;

	//Realizo la operación.
	resultado = parseInt(numero_01)-parseInt(numero_02);
	//Muestro el resultado de la operación mediante un alert.
	alert("La resta da: "+resultado);
}

function multiplicar()
{ 
	//Guardo en las variables los números ingresados.
	numero_01 = document.getElementById("txtIdNumeroUno").value;
	numero_02 = document.getElementById("txtIdNumeroDos").value;

	//Realizo la operación.
	resultado = parseInt(numero_01)*parseInt(numero_02);
	//Muestro el resultado de la operación mediante un alert.
	alert("La multiplicación da: "+resultado);	
}

function dividir()
{
	//Guardo en las variables los números ingresados.
	numero_01 = document.getElementById("txtIdNumeroUno").value;
	numero_02 = document.getElementById("txtIdNumeroDos").value;

	//Realizo la operación.
	resultado = parseInt(numero_01)/parseInt(numero_02);
	//Muestro el resultado de la operación mediante un alert.
	alert("La división da: "+resultado);		
}