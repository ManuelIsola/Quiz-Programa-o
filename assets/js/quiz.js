// Banco de perguntas
const quizData = {
    html: [
        {
            question: "Qual tag HTML é usada para criar um link?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: 0,
            explanation: "A tag <a> (âncora) é usada para criar links em HTML, geralmente com o atributo href para especificar o destino."
        },
        {
            question: "Qual atributo HTML especifica um texto alternativo para uma imagem?",
            options: ["src", "alt", "title", "description"],
            answer: 1,
            explanation: "O atributo 'alt' fornece um texto alternativo para uma imagem, que é exibido se a imagem não puder ser carregada e também é usado por leitores de tela."
        },
        {
            question: "Qual tag HTML cria uma lista não ordenada?",
            options: ["<ol>", "<li>", "<ul>", "<list>"],
            answer: 2,
            explanation: "A tag <ul> cria uma lista não ordenada, geralmente com marcadores. Os itens individuais são definidos com a tag <li>."
        },
        {
            question: "Qual elemento HTML5 é usado para reproduzir vídeos?",
            options: ["<video>", "<media>", "<movie>", "<player>"],
            answer: 0,
            explanation: "O elemento <video> é usado para incorporar conteúdo de vídeo em uma página web."
        },
        {
            question: "Qual tag HTML define o título de uma página que aparece na aba do navegador?",
            options: ["<head>", "<header>", "<title>", "<top>"],
            answer: 2,
            explanation: "A tag <title> define o título da página que aparece na aba do navegador e nos resultados de pesquisa."
        },
        {
            question: "Qual elemento HTML5 é usado para desenhar gráficos via JavaScript?",
            options: ["<draw>", "<graphic>", "<svg>", "<canvas>"],
            answer: 3,
            explanation: "O elemento <canvas> é usado como um contêiner para gráficos desenhados via JavaScript."
        },
        {
            question: "Qual tag HTML cria uma quebra de linha?",
            options: ["<lb>", "<break>", "<br>", "<newline>"],
            answer: 2,
            explanation: "A tag <br> insere uma quebra de linha simples sem iniciar um novo parágrafo."
        },
        {
            question: "Qual atributo HTML5 é usado para validação de formulários, especificando que um campo é obrigatório?",
            options: ["required", "mandatory", "validate", "important"],
            answer: 0,
            explanation: "O atributo 'required' especifica que um campo de formulário deve ser preenchido antes de enviar o formulário."
        },
        {
            question: "Qual tag HTML cria uma tabela?",
            options: ["<table>", "<grid>", "<tb>", "<tab>"],
            answer: 0,
            explanation: "A tag <table> é usada para criar uma tabela em HTML. Dentro dela, normalmente usamos tags como <tr>, <th> e <td>."
        },
        {
            question: "Qual elemento HTML é usado para agrupar elementos de formulário relacionados?",
            options: ["<group>", "<form-group>", "<fieldset>", "<section>"],
            answer: 2,
            explanation: "O elemento <fieldset> é usado para agrupar elementos relacionados em um formulário e geralmente inclui um elemento <legend> para fornecer uma legenda."
        }
    ],
    css: [
        {
            question: "Qual propriedade CSS altera a cor do texto?",
            options: ["text-color", "font-color", "color", "foreground-color"],
            answer: 2,
            explanation: "A propriedade 'color' é usada para definir a cor do texto de um elemento."
        },
        {
            question: "Como você seleciona um elemento com id 'header' em CSS?",
            options: ["#header", ".header", "header", "*header"],
            answer: 0,
            explanation: "O símbolo '#' é usado para selecionar elementos pelo seu id em CSS."
        },
        {
            question: "Qual propriedade CSS define o espaçamento entre as bordas de elementos adjacentes?",
            options: ["spacing", "margin", "padding", "border-spacing"],
            answer: 1,
            explanation: "A propriedade 'margin' define o espaçamento entre as bordas de elementos adjacentes."
        },
        {
            question: "Qual valor da propriedade 'display' torna um elemento flexível?",
            options: ["inline-flex", "block", "flex", "grid"],
            answer: 2,
            explanation: "O valor 'flex' da propriedade display ativa o modelo de layout Flexbox para o elemento e seus filhos diretos."
        },
        {
            question: "Qual propriedade CSS é usada para adicionar sombras a um texto?",
            options: ["font-shadow", "text-shadow", "shadow-effect", "box-shadow"],
            answer: 1,
            explanation: "A propriedade 'text-shadow' adiciona sombra ao texto, permitindo especificar deslocamento horizontal, vertical, desfoque e cor."
        },
        {
            question: "Qual unidade CSS é relativa ao tamanho da fonte do elemento pai?",
            options: ["px", "em", "rem", "vh"],
            answer: 1,
            explanation: "A unidade 'em' é relativa ao tamanho da fonte do elemento pai. Por exemplo, 2em significa duas vezes o tamanho da fonte atual."
        },
        {
            question: "Qual propriedade CSS controla a opacidade de um elemento?",
            options: ["visibility", "transparent", "opacity", "alpha"],
            answer: 2,
            explanation: "A propriedade 'opacity' controla a transparência de um elemento, aceitando valores de 0 (totalmente transparente) a 1 (totalmente opaco)."
        },
        {
            question: "Qual pseudo-classe CSS seleciona um elemento quando o mouse está sobre ele?",
            options: [":active", ":focus", ":hover", ":visited"],
            answer: 2,
            explanation: "A pseudo-classe ':hover' seleciona elementos quando o cursor do mouse está sobre eles."
        },
        {
            question: "Qual propriedade CSS é usada para transformar texto em maiúsculas?",
            options: ["text-transform", "text-case", "font-case", "uppercase"],
            answer: 0,
            explanation: "A propriedade 'text-transform' pode transformar o texto em maiúsculas, minúsculas ou capitalizar a primeira letra de cada palavra."
        },
        {
            question: "Qual propriedade CSS define o modelo de layout em grade?",
            options: ["flex", "table", "grid", "block"],
            answer: 2,
            explanation: "A propriedade 'display: grid' ativa o sistema de layout Grid CSS para o elemento e seus filhos diretos."
        }
    ],
    javascript: [
        {
            question: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu id?",
            options: ["document.query()", "document.getElementById()", "document.findElement()", "document.selectById()"],
            answer: 1,
            explanation: "O método document.getElementById() retorna o elemento que possui o ID especificado."
        },
        {
            question: "Como você declara uma variável em JavaScript que não pode ser reatribuída?",
            options: ["var", "let", "const", "static"],
            answer: 2,
            explanation: "A palavra-chave 'const' declara uma variável que não pode ser reatribuída após a inicialização, embora se for um objeto, suas propriedades ainda possam ser modificadas."
        },
        {
            question: "Qual função JavaScript é usada para analisar uma string e retornar um número inteiro?",
            options: ["Integer.parse()", "parseInteger()", "parseInt()", "Number.parseInt()"],
            answer: 2,
            explanation: "A função parseInt() analisa uma string e retorna um número inteiro na base especificada."
        },
        {
            question: "Qual operador JavaScript é usado para comparar valor e tipo?",
            options: ["==", "===", "=", "!="],
            answer: 1,
            explanation: "O operador '===' compara tanto o valor quanto o tipo dos operandos, retornando true apenas se ambos forem iguais."
        },
        {
            question: "Qual método JavaScript é usado para adicionar um novo elemento ao final de um array?",
            options: ["push()", "append()", "add()", "insert()"],
            answer: 0,
            explanation: "O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array."
        },
        {
            question: "Qual função JavaScript agenda a execução de uma função após um determinado tempo?",
            options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
            answer: 0,
            explanation: "A função setTimeout() executa uma função ou um trecho de código especificado após um determinado tempo (em milissegundos)."
        },
        {
            question: "Qual método JavaScript é usado para criar uma cópia superficial de um array?",
            options: ["array.duplicate()", "array.clone()", "array.slice()", "array.copy()"],
            answer: 2,
            explanation: "O método slice() retorna uma cópia superficial de uma parte do array em um novo objeto array, sem modificar o array original."
        },
        {
            question: "Qual método JavaScript é usado para converter um objeto JavaScript em uma string JSON?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.convert()"],
            answer: 0,
            explanation: "O método JSON.stringify() converte um valor JavaScript em uma string JSON."
        },
        {
            question: "O que o operador '...' faz em JavaScript?",
            options: ["Operador de concatenação", "Operador de divisão", "Operador de resto", "Operador de propagação"],
            answer: 3,
            explanation: "O operador de propagação (spread) '...' permite expandir um iterável em locais onde zero ou mais argumentos/elementos são esperados."
        },
        {
            question: "Qual método de array JavaScript executa uma função para cada elemento do array?",
            options: ["forEach()", "map()", "filter()", "reduce()"],
            answer: 0,
            explanation: "O método forEach() executa uma função fornecida uma vez para cada elemento do array, sem retornar um novo array."
        }
    ]
};

// Estado do quiz
let currentScreen = 'start';
let currentQuestionIndex = 0;
let score = 0;
let selectedCategories = ['html', 'css', 'javascript'];
let questions = [];
let userAnswers = [];
let categoryScores = {
    html: 0,
    css: 0,
    javascript: 0
};

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const filterScreen = document.getElementById('filter-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');

const startQuizBtn = document.getElementById('start-quiz-btn');
const filterQuizBtn = document.getElementById('filter-quiz-btn');
const applyFiltersBtn = document.getElementById('apply-filters-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const showAnswersBtn = document.getElementById('show-answers-btn');

const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');
const htmlScore = document.getElementById('html-score');
const cssScore = document.getElementById('css-score');
const jsScore = document.getElementById('js-score');
const performanceFeedback = document.getElementById('performance-feedback');

// Inicialização
function init() {
    // Event Listeners
    startQuizBtn.addEventListener('click', startQuiz);
    filterQuizBtn.addEventListener('click', showFilterScreen);
    applyFiltersBtn.addEventListener('click', applyFilters);
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    showAnswersBtn.addEventListener('click', showAnswers);
    
    // Listeners para os botões de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', toggleCategory);
    });
}

// Alternar entre telas
function showScreen(screen) {
    startScreen.classList.remove('active');
    filterScreen.classList.remove('active');
    questionScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    if (screen === 'start') {
        startScreen.classList.add('active');
    } else if (screen === 'filter') {
        filterScreen.classList.add('active');
    } else if (screen === 'question') {
        questionScreen.classList.add('active');
    } else if (screen === 'results') {
        resultsScreen.classList.add('active');
    }
    
    currentScreen = screen;
}

// Mostrar tela de filtros
function showFilterScreen() {
    showScreen('filter');
}

// Alternar categoria
function toggleCategory(e) {
    const categoryBtn = e.target;
    const category = categoryBtn.dataset.category;
    
    if (categoryBtn.classList.contains('selected')) {
        // Impedir desmarcar todas as categorias
        const selectedButtons = document.querySelectorAll('.category-btn.selected');
        if (selectedButtons.length > 1) {
            categoryBtn.classList.remove('selected');
        }
    } else {
        categoryBtn.classList.add('selected');
    }
}

// Aplicar filtros
function applyFilters() {
    selectedCategories = [];
    document.querySelectorAll('.category-btn.selected').forEach(btn => {
        selectedCategories.push(btn.dataset.category);
    });
    
    startQuiz();
}

// Iniciar o quiz
function startQuiz() {
    // Reiniciar estados
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
    userAnswers = [];
    categoryScores = {
        html: 0,
        css: 0,
        javascript: 0
    };
    
    // Compilar perguntas com base nas categorias selecionadas
    selectedCategories.forEach(category => {
        questions = [...questions, ...quizData[category].map(question => ({...question, category}))];
    });
    
    // Inicializar array de respostas do usuário
    userAnswers = new Array(questions.length).fill(null);
    
    // Atualizar contador total de perguntas
    totalQuestions.textContent = questions.length;
    
    // Embaralhar perguntas
    shuffleArray(questions);
    
    showScreen('question');
    renderQuestion();
}

// Renderizar pergunta atual
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Atualizar texto e contador
    questionText.textContent = question.question;
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1}/${questions.length}`;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Criar opções
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        
        // Verificar se o usuário já respondeu esta pergunta
        if (userAnswers[currentQuestionIndex] !== null) {
            if (index === question.answer) {
                optionElement.classList.add('correct');
            } else if (index === userAnswers[currentQuestionIndex]) {
                optionElement.classList.add('wrong');
            }
            optionElement.style.pointerEvents = 'none';
        } else {
            optionElement.addEventListener('click', () => selectOption(index));
        }
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Atualizar feedback
    if (userAnswers[currentQuestionIndex] !== null) {
        const isCorrect = userAnswers[currentQuestionIndex] === question.answer;
        feedback.textContent = isCorrect 
            ? "Correto! " + question.explanation 
            : "Incorreto. " + question.explanation;
        feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    } else {
        feedback.textContent = '';
        feedback.className = 'feedback';
    }
    
    // Atualizar botões de navegação
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Próxima';
    
    // Atualizar barra de progresso
    updateProgressBar();
}

// Atualizar barra de progresso
function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Selecionar uma opção
function selectOption(optionIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = optionIndex === question.answer;
    
    // Registrar resposta do usuário
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Atualizar pontuação
    if (isCorrect) {
        score++;
        categoryScores[question.category]++;
    }
    
    // Destacar opções
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.answer) {
            option.classList.add('correct');
        } else if (index === optionIndex && !isCorrect) {
            option.classList.add('wrong');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Mostrar feedback
    feedback.textContent = isCorrect 
        ? "Correto! " + question.explanation 
        : "Incorreto. " + question.explanation;
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    
    // Atualizar pontuação exibida
    scoreDisplay.textContent = `Pontuação: ${score}`;
    
    // Avançar automaticamente após um pequeno delay se não for a última pergunta
    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            showNextQuestion();
        }, 1500);
    }
}

// Mostrar próxima pergunta
function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // Finalizar quiz
        showResults();
    }
}

// Mostrar pergunta anterior
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// Mostrar resultados
function showResults() {
    showScreen('results');
    
    // Atualizar pontuações
    finalScore.textContent = score;
    
    // Contar quantas perguntas de cada categoria
    const categoryCount = {
        html: 0,
        css: 0,
        javascript: 0
    };
    
    questions.forEach(question => {
        categoryCount[question.category]++;
    });
    
    // Atualizar pontuações por categoria
    htmlScore.textContent = `${categoryScores.html}/${categoryCount.html}`;
    cssScore.textContent = `${categoryScores.css}/${categoryCount.css}`;
    jsScore.textContent = `${categoryScores.javascript}/${categoryCount.javascript}`;
    
    // Calcular porcentagem de acerto
    const percentageCorrect = (score / questions.length) * 100;
    
    // Feedback de desempenho
    let feedback = '';
    if (percentageCorrect >= 90) {
        feedback = 'Excelente! Você domina muito bem os conceitos de desenvolvimento web.';
    } else if (percentageCorrect >= 70) {
        feedback = 'Muito bom! Você tem um conhecimento sólido em desenvolvimento web.';
    } else if (percentageCorrect >= 50) {
        feedback = 'Bom trabalho! Você tem conhecimentos intermediários em desenvolvimento web.';
    } else {
        feedback = 'Continue estudando! Com prática, você vai melhorar seus conhecimentos em desenvolvimento web.';
    }
    
    // Identificar áreas fortes e fracas
    const categoryPerformance = [];
    
    if (categoryCount.html > 0) {
        const htmlPercentage = (categoryScores.html / categoryCount.html) * 100;
        if (htmlPercentage < 50) {
            categoryPerformance.push('Recomendamos revisar seus conhecimentos em HTML.');
        } else if (htmlPercentage >= 80) {
            categoryPerformance.push('Você tem um bom domínio de HTML.');
        }
    }
    
    if (categoryCount.css > 0) {
        const cssPercentage = (categoryScores.css / categoryCount.css) * 100;
        if (cssPercentage < 50) {
            categoryPerformance.push('Recomendamos revisar seus conhecimentos em CSS.');
        } else if (cssPercentage >= 80) {
            categoryPerformance.push('Você tem um bom domínio de CSS.');
        }
    }
    
    if (categoryCount.javascript > 0) {
        const jsPercentage = (categoryScores.javascript / categoryCount.javascript) * 100;
        if (jsPercentage < 50) {
            categoryPerformance.push('Recomendamos revisar seus conhecimentos em JavaScript.');
        } else if (jsPercentage >= 80) {
            categoryPerformance.push('Você tem um bom domínio de JavaScript.');
        }
    }
    
    // Atualizar feedback de desempenho
    performanceFeedback.innerHTML = `
        ${feedback}<br><br>
        ${categoryPerformance.join('<br>')}
    `;
}

// Mostrar todas as respostas
function showAnswers() {
    // Alternar entre tela de resultados e quiz
    if (currentScreen === 'results') {
        showScreen('question');
        currentQuestionIndex = 0;
        renderQuestion();
        nextBtn.textContent = 'Próxima';
        prevBtn.disabled = true;
    } else {
        showScreen('results');
    }
}

// Reiniciar o quiz
function restartQuiz() {
    showScreen('start');
}

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar o quiz
document.addEventListener('DOMContentLoaded', init);