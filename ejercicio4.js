//funcion tradicional
function calcularSablesDefectuososT(datosTemp){
    let contNeg=0
    for (let i=0; i<datosTemp.length; i++) {
        if(datosTemp[i] < 0){
            contNeg++
        }
    }
    return contNeg
}

//funcion flecha
const calcularSablesDefectuososF = datosTemp => datosTemp.filter(numero => numero < 0).length;

let datosTemperaturas = [2, 4, -8, 5, -6, -15, -30, 10]   

let sablesDefectuososT= calcularSablesDefectuososT(datosTemperaturas)
let sablesDefectuososF= calcularSablesDefectuososF(datosTemperaturas)
console.log("La cantidad de sables defectuosos funcion tradicional son:", sablesDefectuososT);
console.log("La cantidad de sables defectuosos funcion flecha son:", sablesDefectuososF);