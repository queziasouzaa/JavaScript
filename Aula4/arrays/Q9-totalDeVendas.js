function calcularTotalVendas(vendas) {
    return vendas.reduce((acc, venda) => acc + venda, 0);
}

const vendas = [100, 200, 150];
console.log(calcularTotalVendas(vendas));
