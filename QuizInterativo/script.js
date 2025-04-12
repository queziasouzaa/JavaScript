const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    opcoes: ["var", "let", "const", "define"],
    resposta: 1
  },
  {
    pergunta: "O que `document.querySelector('.item')` retorna?",
    opcoes: [
      "Um array com todos os elementos com a classe 'item'",
      "O primeiro elemento com a classe 'item'",
      "Nada, pois precisa ser 'getElement'",
      "Todos os elementos com qualquer classe"
    ],
    resposta: 1
  },
  {
    pergunta: "O que `typeof null` retorna em JavaScript?",
    opcoes: ["'object'", "'null'", "'undefined'", "'number'"],
    resposta: 0
  },
  {
    pergunta: "Qual símbolo é usado para comentários de linha única?",
    opcoes: ["/* */", "//", "<!-- -->", "#"],
    resposta: 1
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento no final de um array?",
    opcoes: [".add()", ".push()", ".append()", ".insert()"],
    resposta: 1
  },
  {
    pergunta: "Qual será o resultado de `2 + '2'` em JavaScript?",
    opcoes: ["4", "'22'", "NaN", "Erro"],
    resposta: 1
  },
  {
    pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
    opcoes: ["String", "Array", "Function", "Object"],
    resposta: 0
  },
  {
    pergunta: "Qual função é usada para atrasar a execução de um código?",
    opcoes: ["delay()", "setTimeout()", "wait()", "sleep()"],
    resposta: 1
  },
  {
    pergunta: "Qual destes operadores verifica valor e tipo?",
    opcoes: ["==", "=", "===", "!="],
    resposta: 2
  },
  {
    pergunta: "Qual objeto representa a data e hora em JavaScript?",
    opcoes: ["Time", "Clock", "Calendar", "Date"],
    resposta: 3
  }
];

let indiceAtual = 0;
let pontuacao = 0;
let tempo = 15;
let timer;

const quizContainer = document.getElementById('quiz-container');
const resultDiv = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const rankingList = document.getElementById('ranking');
const timeDisplay = document.getElementById('time');

function carregarPergunta() {
  clearInterval(timer);
  tempo = 15;
  timeDisplay.textContent = tempo;

  const perguntaAtual = perguntas[indiceAtual];
  quizContainer.innerHTML = `
    <h2>${perguntaAtual.pergunta}</h2>
    ${perguntaAtual.opcoes.map((opcao, i) =>
      `<button onclick="verificarResposta(${i})">${opcao}</button>`
    ).join('')}
  `;

  timer = setInterval(() => {
    tempo--;
    timeDisplay.textContent = tempo;
    if (tempo === 0) {
      proximaPergunta();
    }
  }, 1000);
}

function verificarResposta(i) {
  clearInterval(timer);
  const perguntaAtual = perguntas[indiceAtual];
  const botoes = document.querySelectorAll("#quiz-container button");

  botoes.forEach(btn => btn.disabled = true);

  if (i === perguntaAtual.resposta) {
    botoes[i].style.backgroundColor = "#4CAF50";
    quizContainer.insertAdjacentHTML('beforeend', `<p style="color: green;">Você acertou!</p>`);
    pontuacao++;
  } else {
    botoes[i].style.backgroundColor = "#f44336"; 
    botoes[perguntaAtual.resposta].style.backgroundColor = "#4CAF50";
    quizContainer.insertAdjacentHTML('beforeend', `<p style="color: red;">Você errou!</p>`);
  }

  setTimeout(proximaPergunta, 1000);
}

function proximaPergunta() {
  clearInterval(timer);
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizContainer.innerHTML = '';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline';

  const melhorPontuacao = localStorage.getItem('melhorPontuacao') || 0;
  if (pontuacao > melhorPontuacao) {
    localStorage.setItem('melhorPontuacao', pontuacao);
  }

  let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  ranking.push(pontuacao);
  ranking.sort((a, b) => b - a);
  ranking = ranking.slice(0, 5);
  localStorage.setItem('ranking', JSON.stringify(ranking));

  resultDiv.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

  rankingList.innerHTML = ranking.map((p, i) =>
    `<li>${i + 1}º lugar: ${p} ponto(s)</li>`
  ).join('');
}

restartBtn.addEventListener('click', () => {
  indiceAtual = 0;
  pontuacao = 0;
  resultDiv.textContent = '';
  restartBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
  carregarPergunta();
});

nextBtn.addEventListener('click', proximaPergunta);

carregarPergunta();
