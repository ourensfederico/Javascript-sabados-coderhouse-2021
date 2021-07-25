

// Operadores Logicos 

//== es igual 

//<= es menor o igual 

// >= es mayor o igual 

// === es estrictamente igual tiene que compartir valor y tipo 

// <menor 

// >mayor

// && and "y"

// || or  "o"

// != es distinto 

/*
let edad = Number (prompt ("ingresa tu edad") )

// de un promt viene un string, entonces hay que convertirle a un numero o parsearlo 
let verificacion = confirm ("queres entrar??")

// SI CONDICIÓN 1 Y CONDICION 2 SON VERDADEROS tengo que usar &&
//SI CONDICIÓN 1 o CONDICION 2 SON VERDADEROS tengo que usar || 
 
/* 
if(edad === 30){
    console.log("TENES QUE PAGAR $300");
}
else if (edad >18 && edad < 45) {
    console.log("ENTRAS GRATIS");
}
else julian

    console.log("NO SOS MAYOR");
}

// ejercicio en Clase 
// ingrese nombre y apellido por prompt 

// si el nombre es Julian y queres entrar, mostrar mensaje XXXXXXX 

// sino mostrar mensaje YYYYYYY 

*/ 

/*
let nombre = prompt ("Ingrese Nombre")
let confirmar = confirm ("deseas entrar??")

// recorda que confirm es un bolean falso o verdadero por defecto

// javascript es KEYSENSITIVE 


/*
if (nombre.toLocaleLowerCase() == "julian" && confirmar)  {
    console.log("XXXXXXXX")
}
else {
    console.log("YYYYYYY")
}


// Ejercicio 2 

*/ 

let nombre = prompt("Ingrese Nombre")
let año = prompt ("Ingrese año nacimiento")
let contraseña = prompt ("Ingrese Contraseña")
let añoActual = Number (prompt ("Ingrese Año actual"))
let edadActual = Number (añoActual - año)

if (contraseña.toLowerCase() =="coderhouse"){
    console.log (edadActual)
}
else {
console.log ("contraseña incorrecta")
}

