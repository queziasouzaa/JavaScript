function calcularAutomaticamente() {
    const operadores = ["+", "-", "*", "/", "%"];

    setInterval(() => {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let operador = operadores[Math.floor(Math.random() * operadores.length)];

        let resultado;
        if (operador === "/" || operador === "%") {
            while (num2 === 0) { 
                num2 = Math.floor(Math.random() * 100);
            }
        }

        resultado = calcular(num1, num2, operador);
        console.log(`${num1} ${operador} ${num2} = ${resultado}`);
    }, 2000);
}

calcularAutomaticamente();
