/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	////////////////////////////
	//alert("ok");
	////////////////////////////
	
	//Declaro la variable
	let nombreIngresoE4;

	nombreIngresoE4 = prompt("Ingresá tu nombre");

	//Si lo invierto guardo el dato para mostrarlo en la textBox.
	document.getElementById("txtIdNombre").value = nombreIngresoE4;
	
}

