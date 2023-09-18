//Funcion tradicional
function calcularSalarioT(cantLicencias){
    let salario= 3500000 + (1500000*cantLicencias)
    let descuento= salario - (salario * 0.05)
    return descuento
}

//funcion flecha
let calcularSalarioF = cantLicencias => 3500000 + (1500000*cantLicencias) - (3500000 + (1500000*cantLicencias))* 0.05

let licencias=5

let salarioT=calcularSalarioT(licencias)
let salarioF=calcularSalarioF(licencias)
console.log("El salario mensual del trabajador funcion tradicional es:", salarioT);
console.log("El salario mensual del trabajador funcion flecha es:", salarioF);
