function filtrarDevedores(dividas) {
    return dividas.filter(divida => divida > 80);
}

const dividas = [70, 100, 150, 22, 90, 30, 50];
console.log(filtrarDevedores(dividas));