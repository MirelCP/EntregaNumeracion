let alturaCentimetros = 175;
let alturaMetros = 1.75;
let pesoKilos = 80.2;
let alturaMetrosRedondeado = Math.round(alturaMetros);
let pesoKilosRedondeado = Math.round(pesoKilos);

// Este ejercicio tengo dudas a la hora de entender el enunciado 
//(Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript)
let maxValorMasUno = Number.MAX_VALUE + 1;
let maxValor = Number.MAX_VALUE;
let esIgual = maxValor === maxValorMasUno;
console.log(esIgual);
