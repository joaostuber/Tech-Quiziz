/**
 * TechQuiz — Teste seus conhecimentos!
 * HTML5 + CSS3 + JavaScript puro · localStorage
 * A cada partida: perguntas e alternativas são embaralhadas.
 */

// ===================== BANCO DE PERGUNTAS (50) =====================
const QUESTIONS = {
  programacao: [
    {
      question: "Qual símbolo inicia um comentário de uma linha em JavaScript?",
      options: ["//", "/* */", "#", "--"],
      correct: 0,
      explanation: "Em JavaScript, comentários de uma linha começam com //."
    },
    {
      question: "Qual estrutura de dados segue o princípio LIFO (Last In, First Out)?",
      options: ["Fila (Queue)", "Pilha (Stack)", "Lista ligada", "Árvore binária"],
      correct: 1,
      explanation: "Na pilha, o último elemento inserido é o primeiro a ser removido (LIFO)."
    },
    {
      question: "O que significa a sigla HTML?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correct: 0,
      explanation: "HTML significa Hyper Text Markup Language."
    },
    {
      question: "Quais palavras-chave declaram variáveis de escopo de bloco em JavaScript?",
      options: ["Apenas var", "Apenas let", "Apenas const", "let e const"],
      correct: 3,
      explanation: "let e const têm escopo de bloco; var tem escopo de função."
    },
    {
      question: "O que é um algoritmo?",
      options: ["Um tipo de vírus", "Uma sequência finita de passos para resolver um problema", "Um componente de hardware", "Uma linguagem de programação"],
      correct: 1,
      explanation: "Algoritmo é um conjunto finito de instruções para resolver um problema."
    },
    {
      question: "Qual operador compara valor e tipo em JavaScript (igualdade estrita)?",
      options: ["==", "===", "=", "!="],
      correct: 1,
      explanation: "O operador === compara valor e tipo sem conversão automática."
    },
    {
      question: "Em orientação a objetos, o que é encapsulamento?",
      options: ["Herança entre classes", "Ocultar detalhes internos e controlar o acesso", "Criar várias instâncias", "Sobrescrever métodos"],
      correct: 1,
      explanation: "Encapsulamento protege os dados internos e expõe apenas o necessário."
    },
    {
      question: "Qual laço executa um bloco enquanto a condição for verdadeira?",
      options: ["if-else", "switch", "while", "try-catch"],
      correct: 2,
      explanation: "O while repete o bloco enquanto a condição permanecer verdadeira."
    },
    {
      question: "O que é um bug em programação?",
      options: ["Um recurso novo do sistema", "Um erro ou falha no código", "Um tipo de variável", "Uma biblioteca externa"],
      correct: 1,
      explanation: "Bug é um erro ou defeito que gera comportamento incorreto ou inesperado."
    },
    {
      question: "Qual destas é uma linguagem de programação de baixo nível?",
      options: ["Python", "Java", "Assembly", "JavaScript"],
      correct: 2,
      explanation: "Assembly fica próxima da linguagem de máquina e é considerada de baixo nível."
    }
  ],

  hardware: [
    {
      question: "Qual componente é considerado o cérebro do computador?",
      options: ["Memória RAM", "Disco rígido", "Processador (CPU)", "Placa de vídeo"],
      correct: 2,
      explanation: "A CPU executa as instruções dos programas."
    },
    {
      question: "O que significa a sigla RAM?",
      options: ["Read Access Memory", "Random Access Memory", "Rapid Access Module", "Remote Access Memory"],
      correct: 1,
      explanation: "RAM significa Random Access Memory (memória de acesso aleatório)."
    },
    {
      question: "Qual memória é volátil e perde os dados ao desligar o computador?",
      options: ["SSD", "HD", "Memória RAM", "Pendrive"],
      correct: 2,
      explanation: "A RAM é volátil: os dados somem quando a energia é cortada."
    },
    {
      question: "Qual componente processa gráficos e imagens de forma especializada?",
      options: ["CPU", "GPU (placa de vídeo)", "Fonte de alimentação", "Placa-mãe"],
      correct: 1,
      explanation: "A GPU é otimizada para processamento gráfico e paralelismo."
    },
    {
      question: "O que é um SSD?",
      options: ["Um tipo de processador", "Unidade de armazenamento em estado sólido, sem partes móveis", "Uma memória cache", "Um sistema operacional"],
      correct: 1,
      explanation: "SSD (Solid State Drive) usa memória flash e é mais rápido que HD mecânico."
    },
    {
      question: "Qual conector é o mais comum em monitores modernos?",
      options: ["VGA", "HDMI", "Paralelo", "Serial RS-232"],
      correct: 1,
      explanation: "HDMI é o padrão atual mais usado para vídeo e áudio digital."
    },
    {
      question: "Qual é a função principal da placa-mãe?",
      options: ["Armazenar arquivos permanentemente", "Conectar e permitir comunicação entre os componentes", "Processar apenas áudio", "Gerar energia elétrica"],
      correct: 1,
      explanation: "A placa-mãe interliga CPU, memória, discos e periféricos."
    },
    {
      question: "Qual é a função da fonte de alimentação (PSU)?",
      options: ["Armazenar dados", "Converter e fornecer energia elétrica aos componentes", "Processar gráficos", "Refrigerar o processador"],
      correct: 1,
      explanation: "A fonte transforma a energia da tomada nas tensões usadas pelo PC."
    },
    {
      question: "O que significa a sigla BIOS?",
      options: ["Basic Input/Output System", "Binary Integrated Operating System", "Basic Internal Operating Software", "Boot Integrated Operating System"],
      correct: 0,
      explanation: "BIOS (Basic Input/Output System) inicializa o hardware e ajuda a carregar o sistema operacional."
    },
    {
      question: "Qual tipo de memória costuma ser a mais rápida no computador?",
      options: ["HD mecânico", "SSD SATA", "Memória cache da CPU", "Pendrive USB 2.0"],
      correct: 2,
      explanation: "A cache da CPU fica muito próxima do processador e é extremamente rápida."
    }
  ],

  robotica: [
    {
      question: "O que é um sensor em robótica?",
      options: ["Um dispositivo que detecta condições do ambiente", "Um motor que gera movimento", "Uma bateria especial", "Um tipo de roda"],
      correct: 0,
      explanation: "Sensores captam informações como distância, luz e temperatura."
    },
    {
      question: "Qual componente converte energia elétrica em movimento mecânico?",
      options: ["Sensor ultrassônico", "Microcontrolador", "Atuador (motor)", "Display LCD"],
      correct: 2,
      explanation: "Atuadores, como motores, transformam energia elétrica em movimento."
    },
    {
      question: "O que é um microcontrolador?",
      options: ["Um sensor de temperatura", "Uma linguagem de programação", "Um robô industrial completo", "Um computador em um único chip"],
      correct: 3,
      explanation: "Microcontroladores integram processador, memória e entradas/saídas em um chip."
    },
    {
      question: "Qual plataforma é muito usada no ensino de robótica e prototipagem?",
      options: ["Photoshop", "Arduino", "Excel", "Word"],
      correct: 1,
      explanation: "Arduino é popular em projetos educacionais de robótica e IoT."
    },
    {
      question: "O que significa a sigla IoT?",
      options: ["Input Output Technology", "Internal Operating Tool", "Internet of Things (Internet das Coisas)", "Integrated Optical Technology"],
      correct: 2,
      explanation: "IoT conecta objetos físicos à internet para troca de dados."
    },
    {
      question: "Qual sensor mede distância usando ondas sonoras?",
      options: ["Sensor ultrassônico", "Sensor de temperatura", "Sensor de luz", "Sensor de pressão"],
      correct: 0,
      explanation: "O sensor ultrassônico mede o tempo de ida e volta do som para calcular a distância."
    },
    {
      question: "O que é um servomotor?",
      options: ["Um sensor de posição", "Uma bateria recarregável", "Uma roda omnidirecional", "Um motor com controle preciso de posição angular"],
      correct: 3,
      explanation: "Servomotores permitem controlar com precisão o ângulo de rotação."
    },
    {
      question: "Qual é uma aplicação comum de robôs industriais?",
      options: ["Assistir filmes", "Soldagem e montagem em linhas de produção", "Escrever textos literários", "Substituir apenas impressoras"],
      correct: 1,
      explanation: "Robôs industriais são usados em soldagem, pintura e montagem automatizada."
    },
    {
      question: "O que é feedback em um sistema robótico?",
      options: ["Uma mensagem de erro do programa", "Um tipo de motor", "Informação dos sensores usada para ajustar o comportamento", "Uma linguagem de programação"],
      correct: 2,
      explanation: "O feedback permite correções com base nas leituras dos sensores (malha fechada)."
    },
    {
      question: "Quais linguagens são comuns para programar com ROS (Robot Operating System)?",
      options: ["HTML e CSS", "SQL e PHP", "Swift e Kotlin", "Python e C++"],
      correct: 3,
      explanation: "ROS é frequentemente programado em Python e C++."
    }
  ],

  ia: [
    {
      question: "O que significa a sigla IA?",
      options: ["Inteligência Artificial", "Interface Avançada", "Internet Avançada", "Informática Aplicada"],
      correct: 0,
      explanation: "IA significa Inteligência Artificial."
    },
    {
      question: "O que é Machine Learning?",
      options: ["Um tipo de hardware", "Uma linguagem de programação", "Aprendizado de máquina a partir de dados", "Um sistema operacional"],
      correct: 2,
      explanation: "Machine Learning permite que sistemas aprendam padrões a partir de dados."
    },
    {
      question: "Qual é um exemplo comum de aplicação de IA no dia a dia?",
      options: ["Calculadora simples", "Mouse de computador", "Cabo USB", "Assistentes de voz como Siri ou Alexa"],
      correct: 3,
      explanation: "Assistentes de voz usam reconhecimento de fala e processamento de linguagem."
    },
    {
      question: "O que é uma rede neural artificial?",
      options: ["Uma rede de computadores físicos", "Modelo inspirado no cérebro, com neurônios artificiais", "Um tipo de cabo de rede", "Um antivírus"],
      correct: 1,
      explanation: "Redes neurais são modelos inspirados na estrutura do cérebro biológico."
    },
    {
      question: "O que é Deep Learning?",
      options: ["Um tipo de memória", "Uma técnica de compressão de arquivos", "Aprendizado com redes neurais de muitas camadas", "Um protocolo de internet"],
      correct: 2,
      explanation: "Deep Learning usa redes neurais profundas para aprender representações complexas."
    },
    {
      question: "Qual técnica de IA é usada para classificar e-mails como spam?",
      options: ["Classificação (aprendizado supervisionado)", "Apenas regras manuais fixas", "Compressão de dados", "Renderização 3D"],
      correct: 0,
      explanation: "Filtros de spam costumam usar modelos de classificação treinados com exemplos."
    },
    {
      question: "O que é um chatbot?",
      options: ["Um vírus de computador", "Um tipo de processador", "Uma impressora 3D", "Programa que simula conversa com humanos"],
      correct: 3,
      explanation: "Chatbots interagem por texto ou voz de forma automatizada."
    },
    {
      question: "Qual teste avalia se uma máquina pode se comportar de forma indistinguível de um humano?",
      options: ["Teste de Einstein", "Teste de Turing", "Teste de Newton", "Teste de Dijkstra"],
      correct: 1,
      explanation: "O Teste de Turing, proposto por Alan Turing, avalia a capacidade de imitar inteligência humana."
    },
    {
      question: "O que são dados de treinamento em Machine Learning?",
      options: ["Dados descartados após o uso", "Apenas imagens", "Dados usados para ensinar o modelo", "O código-fonte do programa"],
      correct: 2,
      explanation: "Os dados de treinamento são exemplos usados para ajustar o modelo."
    },
    {
      question: "Qual área da IA trata de compreender e gerar linguagem humana?",
      options: ["Visão computacional", "Robótica industrial", "Compressão de áudio", "Processamento de Linguagem Natural (PLN/NLP)"],
      correct: 3,
      explanation: "PLN/NLP permite que máquinas entendam e gerem texto ou fala."
    }
  ],

  gerais: [
    {
      question: "Quem é amplamente considerado um dos pais da computação moderna?",
      options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Mark Zuckerberg"],
      correct: 1,
      explanation: "Alan Turing fez contribuições fundamentais à ciência da computação."
    },
    {
      question: "O que significa a sigla WWW?",
      options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
      correct: 0,
      explanation: "WWW significa World Wide Web."
    },
    {
      question: "Qual empresa desenvolveu o sistema operacional Windows?",
      options: ["Apple", "Google", "Microsoft", "IBM"],
      correct: 2,
      explanation: "O Windows foi desenvolvido pela Microsoft."
    },
    {
      question: "O que é um navegador web?",
      options: ["Programa para acessar páginas na internet", "Um tipo de antivírus", "Um sistema operacional", "Um cabo de rede"],
      correct: 0,
      explanation: "Navegadores interpretam HTML, CSS e JavaScript para exibir páginas."
    },
    {
      question: "Qual destes é um sistema operacional de código aberto?",
      options: ["Windows", "macOS", "Linux", "iOS"],
      correct: 2,
      explanation: "Linux é um sistema operacional de código aberto."
    },
    {
      question: "O que significa a sigla URL?",
      options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Remote Login", "User Resource Location"],
      correct: 0,
      explanation: "URL é o endereço de um recurso na web."
    },
    {
      question: "Qual tecnologia permite conexão sem fio de curto alcance entre dispositivos?",
      options: ["Ethernet", "Bluetooth", "Fibra óptica", "USB"],
      correct: 1,
      explanation: "Bluetooth é uma tecnologia de comunicação sem fio de curto alcance."
    },
    {
      question: "O que é um arquivo com extensão .pdf?",
      options: ["Uma planilha", "Um documento no formato Portable Document Format", "Um vídeo", "Uma imagem vetorial"],
      correct: 1,
      explanation: "PDF preserva a formatação do documento em diferentes dispositivos."
    },
    {
      question: "Qual destes é um protocolo usado na web?",
      options: ["HTTP", "JPG", "MP3", "DOCX"],
      correct: 0,
      explanation: "HTTP (HyperText Transfer Protocol) é o protocolo base da World Wide Web."
    },
    {
      question: "O que é computação em nuvem (cloud computing)?",
      options: ["Armazenar arquivos apenas em pendrives", "Uso de recursos de computação sob demanda pela internet", "Um tipo de processador", "Um antivírus online"],
      correct: 1,
      explanation: "Cloud computing oferece armazenamento e processamento pela internet sob demanda."
    }
  ]
};

const CATEGORY_NAMES = {
  programacao: "Programação",
  hardware: "Hardware e Computadores",
  robotica: "Robótica",
  ia: "Inteligência Artificial",
  gerais: "Conhecimentos Gerais de Tecnologia"
};

const STORAGE_KEY = "techquiz_ranking_v3";
const TIMER_MAX = 30;
const TIMER_CIRC = 100.53;
const POINTS_CORRECT = 100;

// ===================== ESTADO =====================
const state = {
  playerName: "",
  category: "programacao",
  questions: [],
  index: 0,
  score: 0,
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  answered: false,
  timerId: null,
  timeLeft: TIMER_MAX,
  startTime: 0,
  totalTime: 0
};

// ===================== DOM =====================
const $ = (id) => document.getElementById(id);

const ui = {
  screens: {
    start: $("screen-start"),
    game: $("screen-game"),
    results: $("screen-results"),
    ranking: $("screen-ranking")
  },
  playerName: $("player-name"),
  nameError: $("name-error"),
  categorySelect: $("category-select"),
  categoryGrid: $("category-grid"),
  btnStart: $("btn-start"),
  btnViewRanking: $("btn-view-ranking"),
  questionCounter: $("question-counter"),
  progressBar: $("progress-bar"),
  timer: $("timer"),
  timerCircle: $("timer-circle"),
  questionText: $("question-text"),
  options: $("options-container"),
  feedback: $("feedback"),
  explanation: $("explanation"),
  btnNext: $("btn-next"),
  resultName: $("result-name"),
  resultCategory: $("result-category"),
  resultScore: $("result-score"),
  resultCorrect: $("result-correct"),
  resultIncorrect: $("result-incorrect"),
  resultUnanswered: $("result-unanswered"),
  resultPercent: $("result-percent"),
  resultMessage: $("result-message"),
  btnPlayAgain: $("btn-play-again"),
  btnResultsRanking: $("btn-results-ranking"),
  btnBackHome: $("btn-back-home"),
  rankingList: $("ranking-list"),
  rankingEmpty: $("ranking-empty"),
  btnClearRanking: $("btn-clear-ranking"),
  btnRankingBack: $("btn-ranking-back")
};

// ===================== UTIL =====================
function showScreen(name) {
  Object.keys(ui.screens).forEach((key) => {
    ui.screens[key].classList.toggle("active", key === name);
  });
}

function clampName(raw) {
  return String(raw || "").trim().slice(0, 30);
}

function formatTime(n) {
  return String(Math.max(0, n));
}

/** Embaralha array no lugar (Fisher-Yates) */
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/**
 * Copia a pergunta e embaralha as alternativas,
 * atualizando o índice da resposta correta.
 */
function prepareQuestion(source) {
  const items = source.options.map(function (text, i) {
    return { text: text, isCorrect: i === source.correct };
  });
  shuffleInPlace(items);

  return {
    question: source.question,
    options: items.map(function (item) { return item.text; }),
    correct: items.findIndex(function (item) { return item.isCorrect; }),
    explanation: source.explanation
  };
}

// ===================== RANKING =====================
function loadRanking() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter(function (item) {
      return (
        item &&
        typeof item.name === "string" &&
        typeof item.score === "number" &&
        typeof item.category === "string" &&
        typeof item.time === "number"
      );
    });
  } catch (err) {
    return [];
  }
}

function saveRanking(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (err) {
    return false;
  }
}

function addToRanking(entry) {
  const list = loadRanking();
  list.push(entry);
  list.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
  });
  const top = list.slice(0, 10);
  saveRanking(top);
  return top;
}

// ===================== CRONÔMETRO =====================
function clearTimer() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerUI() {
  const t = state.timeLeft;
  ui.timer.textContent = formatTime(t);

  const progress = t / TIMER_MAX;
  const offset = TIMER_CIRC * (1 - progress);
  ui.timerCircle.style.strokeDashoffset = String(offset);

  ui.timerCircle.classList.remove("warn", "danger");
  ui.timer.classList.remove("warn", "danger");

  if (t <= 3) {
    ui.timerCircle.classList.add("danger");
    ui.timer.classList.add("danger");
  } else if (t <= 5) {
    ui.timerCircle.classList.add("warn");
    ui.timer.classList.add("warn");
  }
}

function startTimer() {
  clearTimer();
  state.timeLeft = TIMER_MAX;

  ui.timerCircle.style.transition = "none";
  ui.timerCircle.style.strokeDashoffset = "0";
  ui.timerCircle.classList.remove("warn", "danger");
  ui.timer.classList.remove("warn", "danger");
  void ui.timerCircle.offsetWidth;
  ui.timerCircle.style.transition = "stroke-dashoffset 1s linear, stroke 0.25s ease";

  updateTimerUI();

  state.timerId = setInterval(function () {
    state.timeLeft -= 1;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearTimer();
      onTimeout();
    }
  }, 1000);
}

function onTimeout() {
  if (state.answered) return;
  state.answered = true;
  state.unanswered += 1;

  const q = state.questions[state.index];
  const buttons = ui.options.querySelectorAll(".option");
  buttons.forEach(function (btn, idx) {
    btn.classList.add("disabled");
    if (idx === q.correct) btn.classList.add("correct");
  });

  ui.feedback.textContent = "Tempo esgotado";
  ui.feedback.className = "feedback warn";
  ui.explanation.textContent = q.explanation;
  ui.explanation.classList.add("visible");
  ui.btnNext.classList.remove("is-hidden");
}

// ===================== JOGO =====================
function selectCategory(catId) {
  if (!QUESTIONS[catId]) return;
  state.category = catId;
  ui.categorySelect.value = catId;

  ui.categoryGrid.querySelectorAll(".cat-btn").forEach(function (btn) {
    const selected = btn.dataset.cat === catId;
    btn.classList.toggle("selected", selected);
    btn.setAttribute("aria-selected", selected ? "true" : "false");
  });
}

function startGame() {
  const name = clampName(ui.playerName.value);
  const category = ui.categorySelect.value;

  ui.nameError.textContent = "";

  if (!name) {
    ui.nameError.textContent = "Digite seu nome para começar.";
    ui.playerName.focus();
    return;
  }
  if (name.length < 2) {
    ui.nameError.textContent = "O nome deve ter pelo menos 2 caracteres.";
    ui.playerName.focus();
    return;
  }
  if (!QUESTIONS[category]) {
    ui.nameError.textContent = "Selecione uma categoria válida.";
    return;
  }

  state.playerName = name;
  state.category = category;

  // Copia as perguntas da categoria, embaralha a ORDEM das perguntas
  // e, em cada uma, embaralha a ORDEM das alternativas
  const prepared = QUESTIONS[category].map(prepareQuestion);
  shuffleInPlace(prepared);
  state.questions = prepared;

  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.incorrect = 0;
  state.unanswered = 0;
  state.answered = false;
  state.startTime = Date.now();
  state.totalTime = 0;

  showScreen("game");
  loadQuestion();
}

function loadQuestion() {
  clearTimer();
  state.answered = false;

  const q = state.questions[state.index];
  const total = state.questions.length;
  const current = state.index + 1;

  ui.questionCounter.textContent = "Pergunta " + current + " de " + total;
  ui.progressBar.style.width = (current / total) * 100 + "%";
  ui.questionText.textContent = q.question;

  while (ui.options.firstChild) {
    ui.options.removeChild(ui.options.firstChild);
  }

  const letters = ["A", "B", "C", "D"];
  q.options.forEach(function (text, idx) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[idx];

    const label = document.createElement("span");
    label.className = "option-text";
    label.textContent = text;

    btn.appendChild(letter);
    btn.appendChild(label);
    btn.addEventListener("click", function () {
      selectOption(idx);
    });
    ui.options.appendChild(btn);
  });

  ui.feedback.textContent = "";
  ui.feedback.className = "feedback";
  ui.explanation.textContent = "";
  ui.explanation.classList.remove("visible");
  ui.btnNext.classList.add("is-hidden");

  startTimer();
}

function selectOption(index) {
  if (state.answered) return;
  state.answered = true;
  clearTimer();

  const q = state.questions[state.index];
  const buttons = ui.options.querySelectorAll(".option");

  buttons.forEach(function (btn, idx) {
    btn.classList.add("disabled");
    if (idx === q.correct) {
      btn.classList.add("correct");
    } else if (idx === index) {
      btn.classList.add("incorrect");
    }
  });

  if (index === q.correct) {
    state.score += POINTS_CORRECT;
    state.correct += 1;
    ui.feedback.textContent = "Resposta correta";
    ui.feedback.className = "feedback ok";
  } else {
    state.incorrect += 1;
    ui.feedback.textContent = "Resposta incorreta";
    ui.feedback.className = "feedback bad";
  }

  ui.explanation.textContent = q.explanation;
  ui.explanation.classList.add("visible");
  ui.btnNext.classList.remove("is-hidden");
}

function nextQuestion() {
  if (!state.answered) return;
  state.index += 1;
  if (state.index >= state.questions.length) {
    finishGame();
  } else {
    loadQuestion();
  }
}

function finishGame() {
  clearTimer();
  state.totalTime = Math.round((Date.now() - state.startTime) / 1000);

  const total = state.questions.length;
  const percent = total > 0 ? Math.round((state.correct / total) * 100) : 0;
  const catName = CATEGORY_NAMES[state.category] || state.category;

  ui.resultName.textContent = state.playerName;
  ui.resultCategory.textContent = catName;
  ui.resultScore.textContent = String(state.score);
  ui.resultCorrect.textContent = String(state.correct);
  ui.resultIncorrect.textContent = String(state.incorrect);
  ui.resultUnanswered.textContent = String(state.unanswered);
  ui.resultPercent.textContent = percent + "%";

  var msg;
  if (percent >= 90) msg = "Excelente desempenho. Você domina o tema!";
  else if (percent >= 70) msg = "Muito bem. Seu conhecimento está acima da média.";
  else if (percent >= 50) msg = "Bom resultado. Continue praticando para evoluir.";
  else if (percent >= 30) msg = "Você está no caminho. Revise os temas e tente de novo.";
  else msg = "Não desanime. Cada partida é uma chance de aprender.";

  ui.resultMessage.textContent = msg;

  addToRanking({
    name: state.playerName,
    score: state.score,
    category: catName,
    time: state.totalTime,
    date: new Date().toISOString()
  });

  showScreen("results");
}

// ===================== RANKING UI =====================
function renderRanking() {
  const list = loadRanking();

  while (ui.rankingList.firstChild) {
    ui.rankingList.removeChild(ui.rankingList.firstChild);
  }

  if (list.length === 0) {
    ui.rankingEmpty.classList.remove("is-hidden");
    ui.rankingList.classList.add("is-hidden");
    return;
  }

  ui.rankingEmpty.classList.add("is-hidden");
  ui.rankingList.classList.remove("is-hidden");

  list.forEach(function (item, i) {
    const li = document.createElement("li");
    li.className = "rank-item";

    const pos = document.createElement("span");
    pos.className = "rank-pos";
    pos.textContent = i + 1 + "º";

    const name = document.createElement("span");
    name.className = "rank-name";
    name.textContent = item.name;

    const score = document.createElement("span");
    score.className = "rank-score";
    score.textContent = item.score + " pts";

    const cat = document.createElement("span");
    cat.className = "rank-cat";
    cat.textContent = item.category;

    const time = document.createElement("span");
    time.className = "rank-time";
    time.textContent = item.time + "s";

    li.appendChild(pos);
    li.appendChild(name);
    li.appendChild(score);
    li.appendChild(cat);
    li.appendChild(time);
    ui.rankingList.appendChild(li);
  });
}

function clearRanking() {
  if (!confirm("Tem certeza que deseja limpar todo o ranking?")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    /* ignore */
  }
  renderRanking();
}

// ===================== EVENTOS =====================
function bindEvents() {
  ui.categoryGrid.addEventListener("click", function (e) {
    const btn = e.target.closest(".cat-btn");
    if (btn && btn.dataset.cat) selectCategory(btn.dataset.cat);
  });

  ui.btnStart.addEventListener("click", startGame);
  ui.btnViewRanking.addEventListener("click", function () {
    renderRanking();
    showScreen("ranking");
  });
  ui.btnNext.addEventListener("click", nextQuestion);

  ui.btnPlayAgain.addEventListener("click", function () {
    ui.playerName.value = state.playerName;
    selectCategory(state.category);
    startGame();
  });

  ui.btnBackHome.addEventListener("click", function () {
    clearTimer();
    showScreen("start");
  });

  ui.btnResultsRanking.addEventListener("click", function () {
    renderRanking();
    showScreen("ranking");
  });

  ui.btnClearRanking.addEventListener("click", clearRanking);
  ui.btnRankingBack.addEventListener("click", function () {
    showScreen("start");
  });

  ui.playerName.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      startGame();
    }
  });
}

// ===================== INÍCIO =====================
document.addEventListener("DOMContentLoaded", function () {
  bindEvents();
  selectCategory(ui.categorySelect.value || "programacao");
  ui.timerCircle.style.strokeDasharray = String(TIMER_CIRC);
  ui.timerCircle.style.strokeDashoffset = "0";
  showScreen("start");
});
