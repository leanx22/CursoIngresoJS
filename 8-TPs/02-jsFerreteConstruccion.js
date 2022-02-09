/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
	
	//IDs: txtIdLargo txtIdAncho txtIdRadio
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//IMPORTANTE: En cuanto a el enunciado A y B comprendí que por cada metro a alambrar necesito 3 hilos de alambre.//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//VARIABLES
	var largo_terreno;
	var ancho_terreno;
	var radio_terreno;
	
	//Variables extra utilizadas en todas las funciones para guardar resultados.
	var resultado;
	var perimetro_terreno;
	var area_terreno;

	//Se usan en la función "MATERIALES"
	var bCemento;
	var bCal;

function Rectangulo () 
{
	//Para este problema simplemente calculé el perímetro del terreno y por cada metro utilizo 3 hilos de alambre.

	//Obtengo los datos.
	largo_terreno = document.getElementById("txtIdLargo").value;
	ancho_terreno = document.getElementById("txtIdAncho").value;
	
	parseInt(largo_terreno);
	parseInt(ancho_terreno);

	//No lo uso.
	//radio_terreno = document.getElementById("txtIdRadio");

	//Calculo el area y la guardo.
	largo_terreno *= 2;
	ancho_terreno *= 2;
	perimetro_terreno = largo_terreno+ancho_terreno;

	//Calculo los 3 hilos de alambre por los 3 hilos.
	perimetro_terreno *= 3;

	//Muestro el resultado
	alert("Se necesitan: "+perimetro_terreno+" hilos de alambre.");

}
function Circulo () 
{
	//Obtengo los datos.
	radio_terreno = parseInt(document.getElementById("txtIdRadio").value);
	
	// Saco perímetro de la circunferencia.
	perimetro_terreno = 6.28*radio_terreno;

	// Por cada metro 3 hilos.
	resultado = perimetro_terreno*3;
	
	//Muestro el resultado.
	alert("Se requieren "+resultado+" hilos de alambre");

}
function Materiales () 
{
	//area = base x altura

	//Obtengo los datos.
	largo_terreno = parseInt(document.getElementById("txtIdLargo").value);
	ancho_terreno = parseInt(document.getElementById("txtIdAncho").value);
	
	//Saco el area.
	area_terreno = largo_terreno*ancho_terreno;

	//Por cada metro c. 2 bolsas de cemento y 3 de Cal.
	bCemento = area_terreno*2;
	bCal = area_terreno*3;

	//Muestro la info.
	alert("Necesitás "+bCemento+" bolsas de cemento y "+bCal+" de cal");

}