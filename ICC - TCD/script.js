let currentQuestion = 0
let correctAnswers = 0

document.getElementsByTagName("button")[0].addEventListener("click", startQuiz)
document.getElementsByTagName("button")[1].addEventListener("click", resetQuiz)
// EventListener associado aos botões de iniciar e reiniciar o quiz. Após o clique
// executarão as funções definidas em seus parâmetros, StartQuiz() e resetQuiz() respectivamente.

function startQuiz() { // Função que inicializa o quiz.
    document.querySelector(".startArea").style.display = "none"
    document.querySelector(".progress").style.display = `block`
    showQuestion()
    // Após esconder a Tela Inicial, exibe a barra de progresso e executa a função showQuestion().
}

function showQuestion() { // Função responsável por exibir as questões.
    if (questions[currentQuestion]) { // Verifica se há questões disponíveis.
        let q = questions[currentQuestion]
        // Busca a atual questão no banco, disponível no arquivo "questions.js" e a armazena numa variável.

        let pct = Math.floor((currentQuestion / questions.length) * 100)
        document.querySelector(".progress--bar").style.width = `${pct}%`
        // Calcula a porcentagem do progresso no quiz, e modifica o CSS da Barra de Progresso dinamicamente.

        document.querySelector(".scoreArea").style.display = "none"
        document.querySelector(".questionArea").style.display = "block"
        // Esconde a Tela Final e exibe a Área da Questão respectivamente. Útil quando o usuário reinicia o quiz.

        document.querySelector(".question").innerHTML = q.question
        // Insere a pergunta da questão dentro do Bloco da Pergunta no HTML.

        let optionsHtml = ""
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${Number(i) + 1}</span>${q.options[i]}</div>`
        }
        document.querySelector(".options").innerHTML = optionsHtml
        document.querySelectorAll(".options .option").forEach(item => {
            item.addEventListener("click", optionClickEvent)
        })
        /*
            Linha 32 à Linha 39:

            Após definir uma variável vazia do tipo string, o algoritmo executa um loop adicionando
            dentro da variavel o código HTML que será exibido no Bloco das Opções na página.

            Cada alternativa possui um "data-op" definido dentro do loop. Esse dado será usado para verificar
            se o usuário marcou a alternativa correta.

            O loop será executado dinamicamente se baseando na quantidade de alternativas presentes na questão.

            Após o loop, o algoritmo associará um EventListener em cada alternativa, que quando clicado,
            executará a função OptionClickEvent().
        */
    } else {
        finishQuiz()
        // Caso a condição na Linha 8 seja falsa, a função finishQuiz() será executada.
    }
}

function optionClickEvent(e) { // Função responsável por verificar se a resposta escolhida é a correta.
    let clickedOption = Number(e.target.getAttribute("data-op"))
    // Recupera o "data-op" no HTML da alternativa selecionada e a armazena em uma variável.
    // O parâmetro "e" presente na função, nada mais é a "<div>" da alternativa, trazendo consigo todos os dados.

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++
    }
    currentQuestion++
    showQuestion()
    /*
        O algoritmo verifica se a alternativa selecionada é a correta, comparando a "data-op" com a propriedade "answer"
        presente dentro do objeto de cada questão. Caso verdade, somará +1 na variável correctAnswers.

        Em seguida, somará +1 na variável currentQuestion, responsável por marcar em qual questão o usuário
        se encontra, e executa a função showQuestion().
    */
}

function finishQuiz() { // Função encarregada de encerrar o quiz.
    document.querySelector(".progress--bar").style.width = `100%` // Completa a barra de progresso,
    document.querySelector(".questionArea").style.display = "none" // esconde a Área da Questão,
    document.querySelector(".scoreArea").style.display = "block" // e exibe a Tela Final.

    const points = Math.floor((correctAnswers / questions.length) * 100) // Porcentagem de acertos do usuário.

    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%` // Exibe a porcentagem no Bloco da Porcentagem no HTML

    const text1 = document.querySelector(".scoreText1")
    const image = document.querySelector(".prizeImage")

    document.querySelector(".scoreText2").innerHTML = `Você acertou ${correctAnswers} de ${questions.length} questões!`
    // Exibe no Bloco dos Acertos a relação de respostas corretas do usuário.

    if (points <= 30) { // Bloco condidional
        text1.innerHTML = "Não foi dessa vez :("
        document.querySelector(".scorePct").style.color = "rgba(117, 4, 4, 0.966)"
        image.src = "images/bronze.png"
    } else if (points <= 50) {
        text1.innerHTML = "Mais ou Menos :/"
        document.querySelector(".scorePct").style.color = "#b37503"
        image.src = "images/silver.png"
    } else if (points <= 80) {
        text1.innerHTML = "Acima da média! :)"
        document.querySelector(".scorePct").style.color = "yellow"
        image.src = "images/golden.png"
    } else {
        text1.innerHTML = "Excelente! :D"
        document.querySelector(".scorePct").style.color = "#09B062"
        image.src = "images/prize.png"
    }
    /*
        Com o Bloco da Mensagem e a Imagem Final definidos em variáveis nas Linhas 88 e 89, o algoritmo executará uma
        sequência de verficações no bloco condicional se basendo na porcentagem de acertos do usuário.

        De acordo com o que for verdadeiro, o texto exibido na página dentro do Bloco da Mensagem será definido dinamicamente
        assim como a cor da porcentagem e a imagem apresentada que também sofrerão uma estilização diferente.
    */
}

function resetQuiz() { // Função de reinicializar o quiz.
    currentQuestion = 0
    correctAnswers = 0
    showQuestion()
    // A função retorna à primeira questão e zera os pontos de acertos respectivamente.
    // Logo após, executa a função showQuestion().
}
