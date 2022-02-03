/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	///////////////////////////////////////
	//Ids: txtIdSueldo - - txtIdResultado//
	//////////////////////////////////////
	
	//Declaro variables
	let numero_Sueldo;
	let numero_Resultado;
	
	//Modificando esta variable podemos cambiar el aumento que queremos hacer.
	let porcentaje = 10;

	//Obtengo dato ingresado por usuario.
	numero_Sueldo = document.getElementById("txtIdSueldo").value

	//Realizo la operación para sumarle al dato otorgado el porcentaje deseado.
	numero_Resultado = parseInt(numero_Sueldo)*porcentaje;
	numero_Resultado /= 100;
	numero_Resultado += parseInt(numero_Sueldo);

	//Muestro el resultado en la txtBox.
	document.getElementById("txtIdResultado").value = numero_Resultado;

}
