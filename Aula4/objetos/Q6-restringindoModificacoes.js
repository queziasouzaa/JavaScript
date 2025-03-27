function impedirExtensao(obj) {
    Object.preventExtensions(obj);
}

function selarObjeto(obj) {
    Object.seal(obj);
}

function congelarObjeto(obj) {
    Object.freeze(obj);
}

let produto = { nome: "Celular", preco: 1500 };

impedirExtensao(produto);
produto.cor = "Preto";
console.log(produto.cor);

selarObjeto(produto);
delete produto.preco;
console.log(produto.preco);

congelarObjeto(produto);
produto.preco = 2000;
console.log(produto.preco);