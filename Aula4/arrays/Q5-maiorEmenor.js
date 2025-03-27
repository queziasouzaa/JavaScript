function maior(numeros) {
    return Math.max(...numeros);
}

function menor(numeros) {
    return Math.min(...numeros);
}

const listaNumeros = [-1, 7, 9, 2, 4, 10];
console.log(maior(listaNumeros));
console.log(menor(listaNumeros));