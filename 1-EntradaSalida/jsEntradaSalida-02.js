/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre_user; //let declara una variable que puede cambiar pero solo funciona donde fue declarada.

	//Con prompt muestro un pop up para escribir y guardo la entrada en la variable.
	nombre_user = prompt("Escribí tu nombre pa")

	//muestro una alerta donde aparece el nombre ingresado. B)
	alert("tu nombre es "+nombre_user);
}

