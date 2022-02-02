/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
//////////////////////////////////////////////////////
	//CÓDIGO DEFAULT
	//var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//alert("ok");
///////////////////////////////////////////////////////

	//Declaro la variable
	//let nombreIngreso;
	let nombreIngreso2;

	//txtIdNombre es el id/etiqueta de la caja de texto y con .value obtengo su valor.
	//nombreIngreso = txtIdNombre.value;
	
	//Otra forma de hacerlo. Mas dificil pero mas segura.
	nombreIngreso2 = document.getElementById("txtIdNombre").value;



	alert("El nombre ingresado es: "+nombreIngreso2);

}


