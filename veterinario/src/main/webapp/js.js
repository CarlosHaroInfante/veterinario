/**
 * 
 */

const animales = [];

 function pedirCita(){
	 
	 var fecha, animal, accion, tiempo;
	 
	 
	 
	 fecha = prompt("fecha de la cita yyyy-MM-dd");
	 fechaHecha = new Date(fecha);
	 alert(fechaHecha)
	 
	 const fechaHoy = new Date (Date.now());
	 alert(fechaHoy);
	 
	 
	 
	 if(fechaHecha > fechaHoy){
		 
		  animal = prompt("Que tipo de animal va a traer [gato, perro, exotico]").toLowerCase();
		 
		 if(animal !== "gato" && animal !== "perro" && animal !== "exotico"){
			 
			 alert("Animal mal puesto, las opciones son gato, perro o exotico");
		 }
		 else{
			accion = prompt("Que desea hacerle a su animal [limpieza o chequeo]").toLowerCase();
			
			 if(animal === "gato"){
				 if(accion === "limpieza"){
					 tiempo = "1 hora";
				 }
				 else if(accion === "chequeo"){
					 tiempo = "25 minutos";
				 }
				 else{
					 alert("acción puesta erroneamente");
				 }
				 
			 }
			 else if(animal === "perro"){
				 if(accion === "limpieza"){
					 tiempo = "30 minutos";
				 }
				 else if(accion === "chequeo"){
					 tiempo = "45 minutos";
				 }
				 else{
					 alert("acción puesta erroneamente");
				 }
				 
				 
			 }
			 else if(animal === "exotico"){
				 if(accion === "limpieza"){
					 tiempo = "30 minutos";
				 }
				 else if(accion === "chequeo"){
					 tiempo = "1 hora y 30 minutos";
				 }
				 else{
					 alert("acción puesta erroneamente");
				 }
				 
			 }
			 animales.push({fecha: fechaHecha, animal, accion, tiempo});
			 
			 document.getElementById("tabla").innerHTML += '<tr><td>' + fecha.toLocaleDateString() + "</td><td>" 
			 + animal + "</td><td>" + accion + "</td><td>" + tiempo + '</dt></tr>';
			 
			   
		 }
		 
		 
	 }
	 else{
		 alert("La fecha es inferior a la fecha actual");
	 }
	 
 }