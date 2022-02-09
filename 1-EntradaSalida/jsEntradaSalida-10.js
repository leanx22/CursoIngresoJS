/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento es 750"
*/
function mostrarAumento()
{
	///////////////////////////////////////
	//Ids: txtIdImporte - - txtIdResultado//
	//////////////////////////////////////
	
	//Declaro variables
	let numero_Importe;
	let numero_Resultado;
	
	//Modificando esta variable podemos cambiar el descuento que queremos hacer.
	let porcentaje;
	porcentaje = prompt("Ingrese el porcentaje");


	//Obtengo dato ingresado por usuario.
	numero_Importe = document.getElementById("txtIdImporte").value
	numero_ImporteOriginal = document.getElementById("txtIdImporte").value
	
	//Realizo la operación para obtener el x% del importe dado y se lo resto.
	numero_Resultado = parseInt(numero_Importe)*porcentaje;
	numero_Resultado /= 100;
	numero_Importe -= numero_Resultado;

	//Muestro el resultado en la txtBox.
	document.getElementById("txtIdResultado").value = numero_Importe;

	alert("El importe es"+numero_ImporteOriginal+". La cantidad de descuento es  "+porcentaje+". Y el importe con el descuento es "+numero_Importe+".");
}
