const questions = [
  {
    question: "O que é JavaScript?",
    options: [
      "Uma linguagem de programação de alto nível",
      "Um banco de dados",
      "Um tipo de café",
      "Um sistema operacional",
    ],
    answer: "Uma linguagem de programação de alto nível",
  },
  {
    question: "Qual é a finalidade do operador 'typeof' em JavaScript?",
    options: [
      "Determinar o tipo de dado de uma variável",
      "Comparar dois valores",
      "Criar uma nova variável",
      "Realizar uma operação matemática",
    ],
    answer: "Determinar o tipo de dado de uma variável",
  },
  {
    question: "O que é um 'closure' em JavaScript?",
    options: [
      "Uma maneira de fechar o navegador",
      "Um tipo de erro de sintaxe",
      "Uma função que se lembra do ambiente onde foi criada",
      "Uma declaração de variável global",
    ],
    answer: "Uma função que se lembra do ambiente onde foi criada",
  },
  {
    question: "O que é JSON em JavaScript?",
    options: [
      "Um método de ordenação de dados",
      "Uma forma de declarar variáveis",
      "Um formato de dados que é fácil para humanos lerem e escreverem",
      "Uma estrutura de repetição",
    ],
    answer: "Um formato de dados que é fácil para humanos lerem e escreverem",
  },
  {
    question: "O que é 'Hoisting' em JavaScript?",
    options: [
      "Uma técnica de animação em páginas web",
      "Um erro de lógica em um loop",
      "O comportamento de mover declarações para o topo de seu escopo",
      "Uma função nativa do JavaScript",
    ],
    answer: "O comportamento de mover declarações para o topo de seu escopo",
  },
  {
    question:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    options: ["console.log()", "print()", "display()", "write()"],
    answer: "console.log()",
  },
  {
    question: "O que é uma 'Promise' em JavaScript?",
    options: [
      "Um tipo especial de variável",
      "Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona",
      "Uma função anônima",
      "Um tipo de estrutura de controle",
    ],
    answer:
      "Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona",
  },
  {
    question:
      "Qual operador é usado para verificar igualdade estrita (valor e tipo) em JavaScript?",
    options: ["==", "===", "=", "!=="],
    answer: "===",
  },
  {
    question: "O que é 'NaN' em JavaScript?",
    options: [
      "Um novo padrão de escrita de números",
      "Um método para converter strings em números",
      "Um valor especial que representa 'Not a Number'",
      "Um operador matemático",
    ],
    answer: "Um valor especial que representa 'Not a Number'",
  },
  {
    question: "O que é 'this' em JavaScript?",
    options: [
      "Uma palavra-chave que se refere ao objeto atual em execução",
      "Um nome de variável reservada",
      "Um operador de comparação",
      "Um método para iniciar loops",
    ],
    answer: "Uma palavra-chave que se refere ao objeto atual em execução",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.textContent = `Você acertou ${score} de ${questions.length} questões.`;
}

loadQuestion();
