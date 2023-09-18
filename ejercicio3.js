//funcion tradicional
function calcularTemperaturasMediasT(datos) {
    let temperaturasMedias = [];
    let mediaTotal = 0;

    for (let i = 0; i < datos.length; i++) {
        let temperaturaMedia = (datos[i].temperaturaMaxima + datos[i].temperaturaMinima) / 2;
        temperaturasMedias.push(temperaturaMedia);
        mediaTotal += temperaturaMedia;
    }

    return media = mediaTotal / temperaturasMedias.length;
}

//funcion Flecha 
let calcularTemperaturasMediasFlecha = datos => datos.reduce((total, dato) => 
total + ((dato.temperaturaMaxima + dato.temperaturaMinima) / 2), 0) / datos.length;


let datosTemperaturas = [
{ temperaturaMaxima: 28, temperaturaMinima: 15 },
{ temperaturaMaxima: 30, temperaturaMinima: 18 },
{ temperaturaMaxima: 25, temperaturaMinima: 12 }
];

let temperaturasMediasT = calcularTemperaturasMediasT(datosTemperaturas);
let temperaturasMediasF = calcularTemperaturasMediasFlecha(datosTemperaturas);
console.log("Temperatura media funcion tradicional:", temperaturasMediasT);
console.log("Temperatura media funcion flecha:", temperaturasMediasT);
