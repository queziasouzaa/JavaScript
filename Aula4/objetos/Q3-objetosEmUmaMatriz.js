function objetoParaMatriz(obj) {
    return Object.entries(obj);
}

let produto = { nome: "Notebook", preco: 3000, estoque: 10 };
console.log(objetoParaMatriz(produto));
