/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//IDs: txtIdTemperatura

	var temperatura;
	var resultado;

function FahrenheitCentigrados () 
{
	temperatura = document.getElementById("txtIdTemperatura").value;

	temperatura -= 32;
	temperatura *= 5;
	temperatura /= 9

	alert("El resultado es: "+temperatura);
}

function CentigradosFahrenheit () 
{
	
	temperatura = document.getElementById("txtIdTemperatura").value;

	temperatura *= 1.8;
	temperatura += 32;

	alert("El resultado es: "+temperatura);

}
