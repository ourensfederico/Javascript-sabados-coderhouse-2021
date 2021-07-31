alert ("Hola bienvenido a tu consultor virtual de plataformas de ecommerce");
let nombre = prompt("¿Cómo es tu nombre?")

const consultoriaGratuita = confirm(`¿Hola ${nombre} Quieres que evaluemos en conjunto cual es la mejor plataforma para vos?`);

console.log(`Hola ${nombre} Vamos a empezar la consultoría gratuita`)

//* Si es True el confirm 
// pedir el dato de cuanto es la facturación bruta actual de su sitio web y aplicar una escala de planes
// de 1 a 3.000.000 aplicar escala de un variable del 2,5% 
// de 3.000.001 aplicar escala de un variable 1,8 + $44.0000 

let costoPlataforma = 0
let mantenimientoMensual = 500

if(consultoriaGratuita){

    let revenueOnline = Number(prompt("Ingrese la facturación de su sitio actual"));
    console.log(`Su Facturación bruta declarada es ${revenueOnline}`);
    costoPlataforma = revenueOnline * 0.025 + (mantenimientoMensual * 12)
    console.log(`Su Costo anual de plataforma ${costoPlataforma} dolares`);
    
}

else{

alert("Muchas gracias por su tiempo, le envíaremos la propuesta comercial enseguida");
}

   
    
