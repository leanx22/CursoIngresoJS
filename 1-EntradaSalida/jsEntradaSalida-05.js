/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	////////////////	
	//alert("ok");
	///////////////

	let nombreIngresoE5;
	let edadNombre;

	nombreIngresoE5 = document.getElementById("txtIdNombre").value;
	edadNombre = document.getElementById("txtIdEdad").value;	

	alert("Usted se llama "+nombreIngresoE5+" y tiene "+edadNombre+" años.");
}