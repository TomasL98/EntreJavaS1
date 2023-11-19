//E1
function determinarParidad(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " es un número impar.");
  }
}

determinarParidad(4);
determinarParidad(7);
determinarParidad(0);
determinarParidad(-2);

//E2
function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log(numero2 + " es mayor que " + numero1);
  } else {
    console.log("Ambos números son iguales.");
  }
}

compararNumeros(5, 10);
compararNumeros(20, 5);
compararNumeros(7, 7);

//E3
function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5.");
  } else {
    console.log(numero + " no es múltiplo de 5.");
  }
}

esMultiploDeCinco(10);
esMultiploDeCinco(7);
esMultiploDeCinco(25);

//E4
function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimirNumerosHasta(5);

//E5
function imprimirPalabraRepeticiones(palabra, repeticiones) {
  for (let i = 0; i < repeticiones; i++) {
    console.log(palabra);
  }
}

imprimirPalabraRepeticiones("Hola", 3);

//E6
function imprimirArrays(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const miArrays = [1, 2, 3, "Hola"];
imprimirArrays(miArrays);

//E7
function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraySinQuintoElemento(miArray);

//E8
function multiplicarPorParametro(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * multiplicador;
    console.log(resultado);
  }
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7];
multiplicarPorParametro(numeros, 3);
