function somarNumeros(numeros) {
    return numeros.filter(n => n % 2 === 0 && n % 3 === 0).reduce((acc, num) => acc + num, 0);
}

const numeros = [10, 8, 4, 24, 60, 12, 9];
console.log(somarNumeros(numeros));
