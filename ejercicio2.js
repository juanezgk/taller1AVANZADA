//funcion tradicional
function imprimirNombrePilotoTradicional(codigoAcceso){
    return  subParte= codigoAcceso.split(": ")[1]    
}

//funcion Flecha
let imprimirNombrePilotoFlecha = codigoAcceso => codigoAcceso.split(": ")[1];

//Arrays de los codigos de acceso
codigoAccesos=["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri", "ARQ2557: Finn"]

let resultadoT=imprimirNombrePilotoTradicional("ARQ2555: Sara Bel-Sun")
let resultadoF=imprimirNombrePilotoTradicional("ARQ2556: Nodin Chavdri")

// Llamar funciones
console.log(`el resultado funcion tradicional es: ${resultadoT}`)
console.log(`el resultado funcion flecha es: ${resultadoF}`)

