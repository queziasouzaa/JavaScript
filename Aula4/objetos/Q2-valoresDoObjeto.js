function listarValores(obj) {
    return Object.values(obj);
}

let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
console.log(listarValores(pessoa));
