function gerenciarListas(lista1, lista2, acao, qtdRemover = 0) {
    if (acao === "juntar") {
        return lista1.concat(lista2);
    } else if (acao === "removerUltimos") {
        return lista1.slice(0, -qtdRemover);
    }
}

const lista1 = ["Pão", "Banana"];
const lista2 = ["Leite", "Ovos"];
console.log(gerenciarListas(lista1, lista2, "juntar"));

console.log(gerenciarListas(lista1, [], "removerUltimos", 1));
