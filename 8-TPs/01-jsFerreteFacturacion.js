/*1. Guia Leandro TP01 Div Y. TT.
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//IDs:  txtIdPrecioUno txtIdPrecioDos txtIdPrecioTres

	var	precio_01;
	var precio_02;
	var	precio_03;
	var resultado;

function Sumar () 
{
	
	//Guardo los datos del usuario transf. a INT al mismo tiempo.
	precio_01 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio_02 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio_03 = parseInt(document.getElementById("txtIdPrecioTres").value);

	//Realizo la operacion y guardo el resultado.
	resultado = precio_01+precio_02+precio_03;

	//Muestro la info al usuario.
	alert("La suma de los precios es de: "+resultado);
}
function Promedio () 
{
	
	//Guardo los datos del usuario transf. a INT al mismo tiempo.
	precio_01 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio_02 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio_03 = parseInt(document.getElementById("txtIdPrecioTres").value);

	//Saco el promedio (Suma de los numeros dividido a la cantidad).
	resultado = precio_01+precio_02+precio_03;
	resultado /= 3;

	//Muestro la info al usuario.
	alert("El promedio de los precios es de: "+resultado);
}
function PrecioFinal () 
{
	//Guardo los datos del usuario transf. a INT al mismo tiempo.
	precio_01 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio_02 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio_03 = parseInt(document.getElementById("txtIdPrecioTres").value);

	resultado = precio_01+precio_02+precio_03;
	resultado *= 1.21;

	alert("El precio final es: "+resultado);
}