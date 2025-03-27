function listarPropriedades(obj) {
    return Object.keys(obj);
}

let carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };
console.log(listarPropriedades(carro));
