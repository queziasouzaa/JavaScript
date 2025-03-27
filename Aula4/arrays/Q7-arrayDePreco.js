function converterMoeda(precos) {
    return precos.map(preco => preco * 5);
}

let precosDolares = [10, 20, 30];
console.log(converterMoeda(precosDolares));
