// Declarar funcion tradicional
function calcularDistanciafuncion(x1, x2, y1, y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}

//Variables funcion tradicional
let x1=10
let x2=5
let y1=7
let y2=20

//Variables funcion flecha
let xf1=30
let xf2=50
let yf1=71
let yf2=25


// Declarar funcion Flecha
let calcularDistanciaFlecha=(xf1, xf2, yf1, yf2)=> Math.sqrt(Math.pow(xf2-xf1,2)+Math.pow(yf2-yf1,2))

// Llamar funcion tradicional
let resultadoFuncionTradicional=calcularDistanciafuncion(x1, x2, y1, y2)

//Llamar funcion flecha
let resultadoFuncionFlecha=calcularDistanciaFlecha(xf1, xf2, yf1, yf2)

console.log(`el resultado funcion tradicional es: ${resultadoFuncionTradicional}`)
console.log(`el resultado funcion flecha es: ${resultadoFuncionFlecha}`)