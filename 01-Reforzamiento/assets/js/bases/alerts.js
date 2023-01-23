// // Alertas - Se encuentran dentro del objeto Window del DOM

// alert('Hola mundo');

// // Cancel devuelve un null, capo vacio devuelve ''
// let edad = prompt('Cual es tu edad?', 'Sin edad');

// // Devuelve un boolean
// let seleccion = confirm('Estas seguro?')

// let mati = {
//   trajes: [ 'M', 'P', 'B' ],
//   direc: { zip: '11', ubi: 'malibu'}
// }

// console.log(mati['trajes'].length)
dia = 1
horaActual = 11

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura}`;

console.log( horaApertura, mensaje )