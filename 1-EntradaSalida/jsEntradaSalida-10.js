/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	///////////////////////////////////////
	//Ids: txtIdImporte - - txtIdResultado//
	//////////////////////////////////////
	
	//Declaro variables
	let numero_Importe;
	let numero_Resultado;
	
	//Modificando esta variable podemos cambiar el descuento que queremos hacer.
	let porcentaje = 25;

	//Obtengo dato ingresado por usuario.
	numero_Importe = document.getElementById("txtIdImporte").value

	//Realizo la operación para obtener el x% del importe dado y se lo resto.
	numero_Resultado = parseInt(numero_Importe)*porcentaje;
	numero_Resultado /= 100;
	numero_Importe -= numero_Resultado;

	//Muestro el resultado en la txtBox.
	document.getElementById("txtIdResultado").value = numero_Importe;

}
