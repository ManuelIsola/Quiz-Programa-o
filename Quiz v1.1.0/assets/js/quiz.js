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
                },
                {
                    question: "Qual elemento HTML é usado para definir um cabeçalho de seção?",
                    options: ["<header>", "<head>", "<heading>", "<hgroup>"],
                    answer: 0,
                    explanation: "O elemento <header> é usado para definir um cabeçalho de seção ou página."
                },
                {
                    question: "Qual atributo é usado para especificar a versão do HTML?",
                    options: ["version", "doctype", "type", "Não é necessário em HTML5"],
                    answer: 3,
                    explanation: "Em HTML5, a declaração DOCTYPE simplificada é usada e não requer um atributo de versão."
                },
                {
                    question: "Qual elemento HTML é usado para conteúdo independente e autocontido?",
                    options: ["<div>", "<section>", "<article>", "<independent>"],
                    answer: 2,
                    explanation: "O elemento <article> é usado para conteúdo independente e autocontido que faz sentido por si só."
                },
                {
                    question: "Qual elemento HTML5 é usado para navegação?",
                    options: ["<nav>", "<navigate>", "<navbar>", "<menu>"],
                    answer: 0,
                    explanation: "O elemento <nav> é usado para definir um conjunto de links de navegação."
                },
                {
                    question: "Qual elemento HTML é usado para rodapé de uma seção ou página?",
                    options: ["<bottom>", "<footer>", "<foot>", "<end>"],
                    answer: 1,
                    explanation: "O elemento <footer> é usado para definir o rodapé de um documento ou seção."
                },
                {
                    question: "Qual elemento HTML é usado para representar conteúdo relacionado, mas separado do conteúdo principal?",
                    options: ["<aside>", "<side>", "<related>", "<extra>"],
                    answer: 0,
                    explanation: "O elemento <aside> é usado para conteúdo relacionado, mas separado do conteúdo principal."
                },
                {
                    question: "Qual elemento HTML é usado para incorporar conteúdo externo?",
                    options: ["<embed>", "<external>", "<object>", "<include>"],
                    answer: 2,
                    explanation: "O elemento <object> é usado para incorporar conteúdo externo em um documento HTML."
                },
                {
                    question: "Qual elemento HTML é usado para legendas em tabelas?",
                    options: ["<caption>", "<legend>", "<title>", "<tabletitle>"],
                    answer: 0,
                    explanation: "O elemento <caption> é usado para adicionar uma legenda a uma tabela."
                },
                {
                    question: "Qual elemento HTML é usado para agrupar cabeçalhos de tabela?",
                    options: ["<thead>", "<theader>", "<hgroup>", "<headergroup>"],
                    answer: 0,
                    explanation: "O elemento <thead> é usado para agrupar o conteúdo do cabeçalho em uma tabela."
                },
                {
                    question: "Qual elemento HTML é usado para definir um item de lista em uma lista de descrição?",
                    options: ["<li>", "<dt>", "<dd>", "<dlitem>"],
                    answer: 2,
                    explanation: "O elemento <dd> é usado para descrever um termo em uma lista de descrição (<dl>)."
                },
                {
                    question: "Qual elemento HTML é usado para representar data/hora?",
                    options: ["<time>", "<date>", "<datetime>", "<timestamp>"],
                    answer: 0,
                    explanation: "O elemento <time> é usado para representar data/hora em um formato legível por máquina."
                },
                {
                    question: "Qual elemento HTML é usado para destacar texto?",
                    options: ["<strong>", "<highlight>", "<mark>", "<em>"],
                    answer: 2,
                    explanation: "O elemento <mark> é usado para destacar texto relevante em um contexto específico."
                },
                {
                    question: "Qual elemento HTML é usado para representar progresso?",
                    options: ["<progress>", "<meter>", "<status>", "<loading>"],
                    answer: 0,
                    explanation: "O elemento <progress> é usado para representar o progresso de uma tarefa."
                },
                {
                    question: "Qual elemento HTML é usado para entrada de dados em um formulário?",
                    options: ["<input>", "<data>", "<forminput>", "<textfield>"],
                    answer: 0,
                    explanation: "O elemento <input> é usado para criar controles interativos para formulários baseados na web."
                },
                {
                    question: "Qual tipo de input é usado para seleção de cor?",
                    options: ["type='color'", "type='picker'", "type='select'", "type='colorpicker'"],
                    answer: 0,
                    explanation: "input type='color' fornece um seletor de cores."
                },
                {
                    question: "Qual elemento HTML é usado para um controle deslizante?",
                    options: ["<slider>", "<range>", "<input type='slide'>", "<input type='range'>"],
                    answer: 3,
                    explanation: "input type='range' cria um controle deslizante."
                },
                {
                    question: "Qual elemento HTML é usado para um menu suspenso?",
                    options: ["<dropdown>", "<select>", "<optionlist>", "<menu>"],
                    answer: 1,
                    explanation: "O elemento <select> cria um menu suspenso de opções."
                },
                {
                    question: "Qual atributo HTML é usado para pré-selecionar uma opção em um menu suspenso?",
                    options: ["selected", "checked", "default", "active"],
                    answer: 0,
                    explanation: "O atributo 'selected' pré-seleciona uma opção em um elemento <select>."
                },
                {
                    question: "Qual elemento HTML é usado para agrupar opções em um menu suspenso?",
                    options: ["<group>", "<optgroup>", "<optiongroup>", "<dropdowngroup>"],
                    answer: 1,
                    explanation: "O elemento <optgroup> é usado para agrupar opções relacionadas em um menu suspenso."
                },
                {
                    question: "Qual elemento HTML é usado para um campo de texto multilinha?",
                    options: ["<input type='multiline'>", "<textbox>", "<textarea>", "<multiline>"],
                    answer: 2,
                    explanation: "O elemento <textarea> é usado para campos de texto multilinha."
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
                    question: "Qual unidade CSS is relativa ao tamanho da fonte do elemento pai?",
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
                },
                {
                    question: "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
                    options: ["background-color", "bgcolor", "color-background", "background"],
                    answer: 0,
                    explanation: "A propriedade 'background-color' define a cor de fundo de um elemento."
                },
                {
                    question: "Qual propriedade CSS é usada para arredondar os cantos de um elemento?",
                    options: ["border-radius", "corner-radius", "border-round", "round-corners"],
                    answer: 0,
                    explanation: "A propriedade 'border-radius' arredonda os cantos de um elemento."
                },
                {
                    question: "Qual propriedade CSS é usada para criar transições suaves?",
                    options: ["transition", "animate", "transform", "change"],
                    answer: 0,
                    explanation: "A propriedade 'transition' permite criar animações suaves entre estados."
                },
                {
                    question: "Qual valor da propriedade 'position' faz com que um elemento seja posicionado em relação à janela de visualização?",
                    options: ["relative", "absolute", "fixed", "static"],
                    answer: 2,
                    explanation: "'fixed' posiciona o elemento em relação à janela de visualização (viewport)."
                },
                {
                    question: "Qual propriedade CSS é usada para especificar a ordem de empilhamento de elementos posicionados?",
                    options: ["stack-order", "z-index", "layer", "depth"],
                    answer: 1,
                    explanation: "A propriedade 'z-index' controla a ordem de empilhamento de elementos posicionados."
                },
                {
                    question: "Qual propriedade CSS é usada para criar gradientes?",
                    options: ["gradient", "background-gradient", "linear-gradient", "background-image com gradiente"],
                    answer: 3,
                    explanation: "Gradientes são criados usando a propriedade 'background-image' com funções como linear-gradient()."
                },
                {
                    question: "Qual propriedade CSS é usada para aplicar sombras a elementos?",
                    options: ["shadow", "element-shadow", "box-shadow", "drop-shadow"],
                    answer: 2,
                    explanation: "A propriedade 'box-shadow' aplica sombras a elementos."
                },
                {
                    question: "Qual propriedade CSS é usada para ocultar um elemento sem remover seu espaço?",
                    options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
                    answer: 1,
                    explanation: "'visibility: hidden' oculta o elemento mas mantém seu espaço no layout."
                },
                {
                    question: "Qual propriedade CSS é usada para especificar como o texto deve ser alinhado?",
                    options: ["text-align", "align-text", "text-position", "font-align"],
                    answer: 0,
                    explanation: "A propriedade 'text-align' especifica o alinhamento horizontal do texto."
                },
                {
                    question: "Qual propriedade CSS é usada para controlar o espaçamento entre linhas de texto?",
                    options: ["line-height", "line-spacing", "text-spacing", "spacing"],
                    answer: 0,
                    explanation: "A propriedade 'line-height' controla o espaçamento entre linhas de texto."
                },
                {
                    question: "Qual propriedade CSS é usada para transformar elementos em 2D ou 3D?",
                    options: ["transform", "transition", "translate", "animate"],
                    answer: 0,
                    explanation: "A propriedade 'transform' aplica transformações 2D ou 3D a um elemento."
                },
                {
                    question: "Qual propriedade CSS é usada para criar animações?",
                    options: ["animation", "animate", "keyframes", "transition"],
                    answer: 0,
                    explanation: "A propriedade 'animation' é usada junto com @keyframes para criar animações."
                },
                {
                    question: "Qual propriedade CSS é usada para especificar a direção do eixo principal no Flexbox?",
                    options: ["flex-direction", "flex-flow", "flex-orientation", "flex-align"],
                    answer: 0,
                    explanation: "A propriedade 'flex-direction' define a direção do eixo principal no Flexbox."
                },
                {
                    question: "Qual propriedade CSS é usada para alinhar itens ao longo do eixo transversal no Flexbox?",
                    options: ["align-items", "justify-content", "flex-align", "cross-axis-align"],
                    answer: 0,
                    explanation: "'align-items' alinha itens ao longo do eixo transversal no Flexbox."
                },
                {
                    question: "Qual propriedade CSS é usada para criar colunas em um layout?",
                    options: ["columns", "column-count", "multi-column", "column-layout"],
                    answer: 1,
                    explanation: "A propriedade 'column-count' divide o conteúdo em um número especificado de colunas."
                },
                {
                    question: "Qual propriedade CSS é usada para definir o tamanho de fonte responsivo?",
                    options: ["responsive-font", "font-size: vw", "fluid-font", "font-size: clamp()"],
                    answer: 3,
                    explanation: "A função clamp() permite definir tamanhos de fonte responsivos com valores mínimos e máximos."
                },
                {
                    question: "Qual propriedade CSS é usada para criar máscaras em elementos?",
                    options: ["mask", "clip-path", "element-mask", "hide"],
                    answer: 1,
                    explanation: "A propriedade 'clip-path' é usada para criar máscaras em elementos."
                },
                {
                    question: "Qual propriedade CSS é usada para aplicar filtros visuais?",
                    options: ["filter", "visual-filter", "effect", "css-filter"],
                    answer: 0,
                    explanation: "A propriedade 'filter' aplica efeitos visuais como desfoque ou mudança de cor."
                },
                {
                    question: "Qual propriedade CSS é usada para definir variáveis personalizadas?",
                    options: ["custom-var", "--variable", "var", "css-var"],
                    answer: 1,
                    explanation: "Variáveis CSS são definidas com a sintaxe --nome-da-variavel."
                },
                {
                    question: "Qual propriedade CSS é usada para criar layouts de grade responsivos?",
                    options: ["grid-template", "grid-layout", "display: grid", "responsive-grid"],
                    answer: 2,
                    explanation: "'display: grid' ativa o sistema de layout Grid CSS."
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
                    explanation: "O método slice() retorna uma cópia rasa de uma parte do array em um novo objeto array, sem modificar o array original."
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
                },
                {
                    question: "Qual método é usado para converter uma string em letras maiúsculas?",
                    options: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"],
                    answer: 0,
                    explanation: "O método toUpperCase() converte uma string em letras maiúsculas."
                },
                {
                    question: "Qual método é usado para remover o último elemento de um array?",
                    options: ["pop()", "removeLast()", "shift()", "deleteLast()"],
                    answer: 0,
                    explanation: "O método pop() remove o último elemento de um array e retorna esse elemento."
                },
                {
                    question: "Qual método é usado para adicionar elementos no início de um array?",
                    options: ["push()", "append()", "unshift()", "prepend()"],
                    answer: 2,
                    explanation: "O método unshift() adiciona um ou mais elementos no início de um array."
                },
                {
                    question: "Qual método é usado para encontrar um elemento em um array?",
                    options: ["search()", "find()", "locate()", "get()"],
                    answer: 1,
                    explanation: "O método find() retorna o valor do primeiro elemento que satisfaz a função de teste."
                },
                {
                    question: "Qual método é usado para verificar se um array inclui um valor?",
                    options: ["contains()", "has()", "includes()", "find()"],
                    answer: 2,
                    explanation: "O método includes() determina se um array inclui um determinado valor."
                },
                {
                    question: "Qual método é usado para transformar um array em uma string?",
                    options: ["toString()", "join()", "stringify()", "toText()"],
                    answer: 1,
                    explanation: "O método join() une todos os elementos de um array em uma string."
                },
                {
                    question: "Qual método é usado para criar um novo array com os resultados de uma função?",
                    options: ["forEach()", "map()", "reduce()", "filter()"],
                    answer: 1,
                    explanation: "O método map() cria um novo array com os resultados da chamada de uma função para cada elemento."
                },
                {
                    question: "Qual método é usado para filtrar elementos de um array?",
                    options: ["filter()", "select()", "findAll()", "search()"],
                    answer: 0,
                    explanation: "O método filter() cria um novo array com elementos que passam no teste implementado."
                },
                {
                    question: "Qual método é usado para reduzir um array a um único valor?",
                    options: ["reduce()", "compact()", "sum()", "flatten()"],
                    answer: 0,
                    explanation: "O método reduce() executa uma função redutora para cada elemento do array."
                },
                {
                    question: "Qual método é usado para inverter a ordem dos elementos em um array?",
                    options: ["reverse()", "invert()", "flip()", "backwards()"],
                    answer: 0,
                    explanation: "O método reverse() inverte a ordem dos elementos de um array."
                },
                {
                    question: "Qual método é usado para ordenar os elementos de um array?",
                    options: ["order()", "sort()", "arrange()", "sequence()"],
                    answer: 1,
                    explanation: "O método sort() ordena os elementos de um array."
                },
                {
                    question: "Qual método é usado para concatenar arrays?",
                    options: ["concat()", "merge()", "join()", "combine()"],
                    answer: 0,
                    explanation: "O método concat() é usado para unir dois ou mais arrays."
                },
                {
                    question: "Qual método é usado para verificar se todos os elementos passam em um teste?",
                    options: ["every()", "all()", "testAll()", "verify()"],
                    answer: 0,
                    explanation: "O método every() testa se todos os elementos passam no teste implementado."
                },
                {
                    question: "Qual método é usado para verificar se pelo menos um elemento passa em um teste?",
                    options: ["some()", "any()", "test()", "findAny()"],
                    answer: 0,
                    explanation: "O método some() testa se pelo menos um elemento passa no teste implementado."
                },
                {
                    question: "Qual método é usado para criar uma cópia superficial de parte de um array?",
                    options: ["copy()", "slice()", "splice()", "extract()"],
                    answer: 1,
                    explanation: "O método slice() retorna uma cópia superficial de parte de um array."
                },
                {
                    question: "Qual método é usado para remover/adicionar elementos em qualquer posição do array?",
                    options: ["modify()", "splice()", "edit()", "change()"],
                    answer: 1,
                    explanation: "O método splice() altera o conteúdo de um array removendo ou adicionando elementos."
                },
                {
                    question: "Qual método é usado para encontrar o índice de um elemento em um array?",
                    options: ["indexOf()", "findIndex()", "search()", "locate()"],
                    answer: 0,
                    explanation: "O método indexOf() retorna o primeiro índice em que um elemento pode ser encontrado."
                },
                {
                    question: "Qual método é usado para criar um array a partir de um objeto iterável?",
                    options: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
                    answer: 0,
                    explanation: "Array.from() cria uma nova instância de Array a partir de um objeto iterável."
                },
                {
                    question: "Qual método é usado para preencher todos os elementos de um array com um valor?",
                    options: ["fill()", "populate()", "setAll()", "initialize()"],
                    answer: 0,
                    explanation: "O método fill() preenche todos os elementos de um array com um valor estático."
                },
                {
                    question: "Qual método é usado para achatar um array multidimensional?",
                    options: ["flatten()", "flat()", "joinAll()", "mergeAll()"],
                    answer: 1,
                    explanation: "O método flat() cria um novo array com todos elementos sub-arrays concatenados."
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
        let timer;
        let timeLeft = 5;
        let totalTimeSpent = 0;
        let questionStartTime;
        let timeSpentOnQuestion = 0;
        let timerAnimation;
        
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
        const feedbackText = document.getElementById('feedback-text');
        const progressBar = document.getElementById('progress-bar');
        const timerText = document.getElementById('timer-text');
        const timeSpentDisplay = document.getElementById('time-spent');
        const totalTimeDisplay = document.getElementById('total-time');
        
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
        const resultsMessage = document.getElementById('results-message');
        
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
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.addEventListener('click', toggleCategory);
            });
        }
        
        // Alternar entre telas
        function showScreen(screen) {
            currentScreen = screen;
            
            // Remover classe active de todas as telas
            document.querySelectorAll('.screen').forEach(s => {
                s.classList.remove('active');
            });
            
            // Adicionar classe active à tela atual
            document.getElementById(`${screen}-screen`).classList.add('active');
        }
        
        // Mostrar tela de filtros
        function showFilterScreen() {
            showScreen('filter');
        }
        
        // Alternar categoria
        function toggleCategory(e) {
            const categoryFilter = e.currentTarget;
            const category = categoryFilter.dataset.category;
            
            // Verificar se já existem categorias selecionadas
            const selectedFilters = document.querySelectorAll('.category-filter.selected');
            
            // Impedir desmarcar todas as categorias
            if (categoryFilter.classList.contains('selected') && selectedFilters.length > 1) {
                categoryFilter.classList.remove('selected');
            } else if (!categoryFilter.classList.contains('selected')) {
                categoryFilter.classList.add('selected');
            }
        }
        
        // Aplicar filtros
        function applyFilters() {
            selectedCategories = [];
            document.querySelectorAll('.category-filter.selected').forEach(btn => {
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
            totalTimeSpent = 0;
            
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
        
        // Iniciar temporizador para a pergunta
        function startTimer() {
            // Limpar temporizador anterior se existir
            if (timer) {
                clearInterval(timer);
            }
            
            // Resetar tempo
            timeLeft = 10;
            timerText.textContent = `${timeLeft}s`;
            
            // Resetar animação do timer
            const timerCircle = document.querySelector('.timer-circle');
            timerCircle.style.animation = 'none';
            void timerCircle.offsetWidth; // Trigger reflow
            timerCircle.style.animation = null;
            
            // Iniciar contagem regressiva
            timer = setInterval(() => {
                timeLeft--;
                timerText.textContent = `${timeLeft}s`;
                
                // Mudar cor quando o tempo estiver acabando
                if (timeLeft <= 2) {
                    timerText.style.color = 'var(--danger)';
                }
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    timeUp();
                }
            }, 1000);
        }
        
        // Tempo esgotado
        function timeUp() {
            const question = questions[currentQuestionIndex];
            
            // Registrar que o usuário não respondeu
            userAnswers[currentQuestionIndex] = -1;
            
            // Destacar resposta correta
            const options = optionsContainer.querySelectorAll('.option');
            options.forEach((option, index) => {
                if (index === question.answer) {
                    option.classList.add('correct');
                }
                option.style.pointerEvents = 'none';
            });
            
            // Mostrar feedback
            feedbackText.textContent = "Tempo esgotado! " + question.explanation;
            feedback.className = 'feedback wrong show';
            
            // Atualizar tempo gasto na pergunta
            timeSpentOnQuestion = 5;
            totalTimeSpent += timeSpentOnQuestion;
            timeSpentDisplay.textContent = `Você levou ${timeSpentOnQuestion} segundos nesta pergunta`;
            
            // Avançar automaticamente após um pequeno delay se não for a última pergunta
            if (currentQuestionIndex < questions.length - 1) {
                setTimeout(() => {
                    showNextQuestion();
                }, 3000);
            }
        }
        
        // Renderizar pergunta atual
        function renderQuestion() {
            const question = questions[currentQuestionIndex];
            
            // Registrar hora de início da pergunta
            questionStartTime = new Date().getTime();
            
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
                
                // Adicionar prefixo (A, B, C, D)
                const prefix = document.createElement('div');
                prefix.classList.add('option-prefix');
                prefix.textContent = String.fromCharCode(65 + index); // A, B, C, D
                optionElement.appendChild(prefix);
                
                // Adicionar texto da opção
                const optionText = document.createElement('div');
                optionText.textContent = option;
                optionElement.appendChild(optionText);
                
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
                feedbackText.textContent = isCorrect 
                    ? "Correto! " + question.explanation 
                    : "Incorreto. " + question.explanation;
                feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'} show`;
                
                // Mostrar tempo gasto na pergunta
                timeSpentDisplay.textContent = `Você levou ${timeSpentOnQuestion} segundos nesta pergunta`;
            } else {
                feedback.className = 'feedback';
                feedbackText.textContent = '';
                timeSpentDisplay.textContent = '';
                
                // Iniciar temporizador apenas se a pergunta ainda não foi respondida
                startTimer();
            }
            
            // Atualizar botões de navegação
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Próxima';
            nextBtn.innerHTML = currentQuestionIndex === questions.length - 1 
                ? 'Finalizar <i class="fas fa-flag-checkered"></i>' 
                : 'Próxima <i class="fas fa-arrow-right"></i>';
            
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
            // Calcular tempo gasto na pergunta
            const currentTime = new Date().getTime();
            timeSpentOnQuestion = Math.round((currentTime - questionStartTime) / 1000);
            totalTimeSpent += timeSpentOnQuestion;
            
            // Parar o temporizador
            clearInterval(timer);
            
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
            feedbackText.textContent = isCorrect 
                ? "Correto! " + question.explanation 
                : "Incorreto. " + question.explanation;
            feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'} show`;
            
            // Mostrar tempo gasto na pergunta
            timeSpentDisplay.textContent = `Você levou ${timeSpentOnQuestion} segundos nesta pergunta`;
            
            // Atualizar pontuação exibida
            scoreDisplay.textContent = `Pontuação: ${score}`;
            
            // Avançar automaticamente após um pequeno delay se não for a última pergunta
            if (currentQuestionIndex < questions.length - 1) {
                setTimeout(() => {
                    showNextQuestion();
                }, isCorrect ? 1500 : 3000); // Mostrar explicação por mais tempo se errou
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
            totalQuestions.textContent = questions.length;
            totalTimeDisplay.textContent = totalTimeSpent;
            
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
            
            // Mensagem de resultado baseada no desempenho
            let message = '';
            if (percentageCorrect >= 90) {
                message = 'Excelente! Você domina muito bem os conceitos de desenvolvimento web.';
            } else if (percentageCorrect >= 70) {
                message = 'Muito bom! Você tem um conhecimento sólido em desenvolvimento web.';
            } else if (percentageCorrect >= 50) {
                message = 'Bom trabalho! Você tem conhecimentos intermediários em desenvolvimento web.';
            } else {
                message = 'Continue estudando! Com prática, você vai melhorar seus conhecimentos em desenvolvimento web.';
            }
            resultsMessage.textContent = message;
            
            // Feedback de desempenho detalhado
            let feedback = '';
            
            // Identificar áreas fortes e fracas
            const categoryPerformance = [];
            
            if (categoryCount.html > 0) {
                const htmlPercentage = (categoryScores.html / categoryCount.html) * 100;
                if (htmlPercentage < 50) {
                    categoryPerformance.push('Recomendamos revisar seus conhecimentos em HTML.');
                } else if (htmlPercentage >= 80) {
                    categoryPerformance.push('Você tem um excelente domínio de HTML.');
                }
            }
            
            if (categoryCount.css > 0) {
                const cssPercentage = (categoryScores.css / categoryCount.css) * 100;
                if (cssPercentage < 50) {
                    categoryPerformance.push('Recomendamos revisar seus conhecimentos em CSS.');
                } else if (cssPercentage >= 80) {
                    categoryPerformance.push('Você tem um excelente domínio de CSS.');
                }
            }
            
            if (categoryCount.javascript > 0) {
                const jsPercentage = (categoryScores.javascript / categoryCount.javascript) * 100;
                if (jsPercentage < 50) {
                    categoryPerformance.push('Recomendamos revisar seus conhecimentos em JavaScript.');
                } else if (jsPercentage >= 80) {
                    categoryPerformance.push('Você tem um excelente domínio de JavaScript.');
                }
            }
            
            // Adicionar feedback sobre o tempo
            const averageTimePerQuestion = (totalTimeSpent / questions.length).toFixed(1);
            feedback += `Você gastou em média ${averageTimePerQuestion} segundos por pergunta. `;
            
            if (averageTimePerQuestion < 3) {
                feedback += "Você foi rápido em responder as perguntas! ";
            } else if (averageTimePerQuestion > 4) {
                feedback += "Você pode praticar para responder mais rapidamente. ";
            }
            
            // Adicionar feedback das categorias
            if (categoryPerformance.length > 0) {
                feedback += categoryPerformance.join(' ');
            }
            
            performanceFeedback.textContent = feedback;
        }
        
        // Mostrar todas as respostas
        function showAnswers() {
            // Alternar entre tela de resultados e quiz
            if (currentScreen === 'results') {
                showScreen('question');
                currentQuestionIndex = 0;
                renderQuestion();
                nextBtn.textContent = 'Próxima';
                nextBtn.innerHTML = 'Próxima <i class="fas fa-arrow-right"></i>';
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