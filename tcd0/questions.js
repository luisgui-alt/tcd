/*
    Array de questões do quiz. Cada índice do array é um objeto e cada objeto possui as propriedades "question",
    "options" e "answer". Sendo respectivamente a pergunta, as alternativas e a resposta correta de cada questão.

    O número de questões pode ser ilimitada, assim como o número de alternativas, mas somente poderá haver uma
    resposta correta.

    O JavaScript fica encarregado de adaptar a página web, por isso a quantidade de questões e alternativas pode
    ser definida livremente, cabendo apenas ao idealizador respeitar a sintaxe padrão do código.
*/
let questions = [
    {
        question: 'Qual foi o primeiro computador mecânico da história?',
        options: [
            'Máquina Pascalina',
            'Mark I',
            'Máquina Análitica',
            'ENIAC'
        ],
        answer: 2
    },
    {
        question: 'Quem é considerado o pai do computador?',
        options: [
            'Alan Turing',
            'Herman Hollerith',
            'Charles Babbage',
            'Von Neumann'
        ],
        answer: 2
    },
    {
        question: 'Quantos Bytes equivale 1 Kilobyte?',
        options: [
            '8',
            '64',
            '512',
            '1024'
        ],
        answer: 3
    },
    {
        question: 'Ada Lovelace é o nome da primeira programadora da história.',
        options: [
            'Verdeiro',
            'Falso'
        ],
        answer: 0
    },
    {
        question: 'O que significa uma rede "PAN"?',
        options: [
            'Private Area Network',
            'Personal Area Network',
            'Party Area Network'
        ],
        answer: 1
    },
    {
        question: 'O endereçamento MAC trata da localização lógica do computador na rede, enquanto o endereçamento físico fica por conta do IP-Address.',
        options: [
            'Verdadeiro',
            'Falso'
        ],
        answer: 1
    },
];