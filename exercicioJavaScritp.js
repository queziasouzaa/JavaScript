// Exercício 1
function operacoes(a, b) {
    console.log(`Soma: ${a + b}`);
    console.log(`Subtração: ${a - b}`);
    console.log(`Multiplicação: ${a * b}`);
    console.log(`Divisão: ${a / b}`);
}
operacoes(10, 5);

// Exercício 2
function classificarTriangulo(a, b, c) {
    if (a === b && b === c) return "Equilátero";
    if (a === b || b === c || a === c) return "Isósceles";
    return "Escaleno";
}
console.log(classificarTriangulo(3, 3, 3));
console.log(classificarTriangulo(3, 3, 2));
console.log(classificarTriangulo(3, 4, 5));

// Exercício 3
function potencia(base, expoente) {
    return Math.pow(base, expoente);
}
console.log(potencia(2, 3));
console.log(potencia(5, 2));

// Exercício 4
function formatarDinheiro(valor) {
    return `R$${valor.toFixed(2).replace(".", ",")}`;
}
console.log(formatarDinheiro(0.1 + 0.2));

// Exercício 5
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa), tempo);
}
console.log(jurosSimples(1000, 0.05, 2));
console.log(jurosCompostos(1000, 0.05, 2));

// Exercício 6
function bhaskara(ax2, bx, c) {
    let delta = (bx * bx) - (4 * ax2 * c);
    if (delta < 0) return "Delta é negativo";
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
    return [x1, x2];
}
console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, -3, 2));

// Exercício 7
function analisarPontuacoes(pontuacoes) {
    let recordes = 0, piorJogo = 0, maior = pontuacoes[0], menor = pontuacoes[0];
    pontuacoes.forEach((pontuacao, index) => {
        if (pontuacao > maior) {
            maior = pontuacao;
            recordes++;
        }
        if (pontuacao < menor) {
            menor = pontuacao;
            piorJogo = index + 1;
        }
    });
    return [recordes, piorJogo];
}
console.log(analisarPontuacoes("10 20 20 8 25 3 0 30 1"));

// Exercício 8
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
console.log(anoBissexto(2024));
console.log(anoBissexto(2100));

// Exercício 9
function fatorial(n) {
    return n <= 1 ? 1 : n * fatorial(n - 1);
}
console.log(fatorial(5));
console.log(fatorial(0));

// Exercício 10
function comprarCarro(modelo) {
    switch (modelo) {
        case "hatch": return "Compra efetuada com sucesso";
        case "sedan":
        case "motocicleta":
        case "caminhonete": return "Tem certeza que prefere este modelo?";
        default: return "Não trabalhamos com este tipo de automóvel aqui";
    }
}
console.log(comprarCarro("hatch"));
console.log(comprarCarro("sedan"));
console.log(comprarCarro("esportivo"));

// Exercício 11
function calcularAumento(plano, salario) {
    const aumentos = { A: 1.1, B: 1.15, C: 1.2 };
    return salario * (aumentos[plano] || 1);
}
console.log(calcularAumento(2000, "A"));
console.log(calcularAumento(1500, "C"));
console.log(calcularAumento(3000, "D"));

// Exercício 12
function calcularPedido(codigo, quantidade) {
    const cardapio = {
        100: 3.00, 200: 4.00, 300: 5.50, 400: 7.50, 500: 3.50, 600: 2.80
    };
    return cardapio[codigo] ? `R$ ${(cardapio[codigo] * quantidade).toFixed(2)}` : "Produto inexistente";
}
console.log(calcularPedido(100, 2));
console.log(calcularPedido(400, 1));
console.log(calcularPedido(999, 3));

// Exercício 13
function calcularNotas(valor) {
    let notas = [100, 50, 10, 5, 1], resultado = {};
    for (let nota of notas) {
        if (valor >= nota) {
            resultado[nota] = Math.floor(valor / nota);
            valor %= nota;
        }
    }
    return resultado;
}
console.log(contarCedulas(186));

// Exercício 14
function calcularPlanoSaude(idade) {
    if (idade < 10) return 180;
    if (idade <= 30) return 150;
    if (idade <= 60) return 195;
    return 230;
}
console.log(calcularPlanoSaude(8));
console.log(calcularPlanoSaude(25));
console.log(calcularPlanoSaude(50));
console.log(calcularPlanoSaude(70));

// Exercício 15
function contarIntervalo(vetor) {
    return vetor.filter(num => num >= 10 && num <= 20).length;
}
multiplosEntre(10, 30);

// Exercício 16
function converterNotas(notas) {
    return notas.map(nota => {
        if (nota < 5) return "D";
        if (nota < 7) return "C";
        if (nota < 9) return "B";
        return "A";
    });
}
console.log(calcularAnuidade(3, 100));
console.log(calcularAnuidade(12, 100));

// Exercício 17
function contarIntervalo(vetor) {
    let count = 0;
    for (let num of vetor) {
        if (num >= 10 && num <= 20) {
            count++;
        }
    }
    return count;
}
console.log(contarIntervalo([5, 10, 15, 20, 25]));

// Exercício 18
function converterNotas(notas) {
    return notas.map(nota => {
        if (nota >= 9) return "A";
        if (nota >= 7) return "B";
        if (nota >= 5) return "C";
        return "D";
    });
}
console.log(converterNotas([9.5, 6.8, 4.0, 7.9]));

// Exercício 19
function intervaloArray(inicio, fim) {
    let resultado = [];
    for (let i = inicio + 1; i < fim; i++) {
        resultado.push(i);
    }
    return resultado;
}
console.log(intervaloArray(5, 10));

// Exercício 20
function copiarObjeto(objeto, propriedade) {
    let copia = { ...objeto };
    delete copia[propriedade];
    return copia;
}
let pessoaa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
console.log(copiarObjeto(pessoaa, "idade"));

// Exercício 21
function filtrarNumeros(array) {
    return array.filter(item => typeof item === 'number');
}
console.log(filtrarNumeros([1, "a", 2, true, 3, "b"]));

// Exercício 22
function objetoParaArray(obj) {
    return Object.entries(obj);
}
console.log(objetoParaArray({ nome: "Ana", idade: 25 }));

// Exercício 23
function filtrarPares(array) {
    return array.filter(num => {
        return String(num).split("").some(digito => digito % 2 === 0);
    });
}
console.log(filtrarPares([123, 456, 789, 102]));

// Exercício 24
function calcularDespesas(despesas) {
    return despesas.reduce((total, item) => total + item.preco, 0);
}
function sorteio(num) {
    let sorteado = Math.floor(Math.random() * 10) + 1;
    return num === sorteado ? `Parabéns! O número sorteado foi ${sorteado}` : `Que pena! O número sorteado foi ${sorteado}`;
}
console.log(calcularDespesas(compras));

// Exercício 25
function contarPalavras(frase) {
    return frase.split(" ").length;
}
console.log(sorteio(5));

// Exercício 26
function contarPalavras(frase) {
    return frase.split(" ").length;
}

console.log(contarPalavras("Olá mundo! Como você está?"));

// Exercício 27
function clonarSemChaves(obj, chavesIndesejadas) {
    let copia = { ...obj };
    chavesIndesejadas.forEach(chave => delete copia[chave]);
    return copia;
}
let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
console.log(clonarSemChaves(pessoa, ["idade"])); 

// Exercício 28
function melhorEstudante(estudantes) {
    let melhor = { nome: "", media: 0 };

    for (let aluno in estudantes) {
        let media = estudantes[aluno].reduce((a, b) => a + b, 0) / estudantes[aluno].length;
        if (media > melhor.media) {
            melhor = { nome: aluno, media };
        }
    }

    return melhor;
}
const alunos = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
};

console.log(melhorEstudante(alunos));

// Exercício 29
function filtrarEmEstoque(produtos) {
    return produtos.filter(produto => produto.emEstoque);
}
const produtos = [
    { nome: "Celular", preco: 1500, emEstoque: true },
    { nome: "Notebook", preco: 3000, emEstoque: false },
    { nome: "Tablet", preco: 1200, emEstoque: true }
];

console.log(filtrarEmEstoque(produtos)); 