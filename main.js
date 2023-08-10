/* Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert('Hello World!');


/* Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */
let firstNumber = 2
let secondNumber = 2

const sum = firstNumber + secondNumber

alert(`O resultado da soma é ${sum}`)


/* 
    Crie um script que declare uma variável e verifique se o seu valor é um número. 
    Se for, exiba a mensagem "É um número", 
    caso contrário, exiba a mensagem "Não é um número".
*/

let exampleNumber = '2'

if (typeof exampleNumber === 'number') {
    alert('É um número.')
} else {
    alert('Não é um número.')
}


/*
    Crie um script que declare uma variável e verifique se o seu valor é uma string. 
    Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/
let exampleString = 'abcd'

if (typeof exampleString === 'string') {
    alert('É uma string,')
} else {
    alert('Não é uma string.')
}


/*
    Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
    Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/
let exampleBoolean = true

if (typeof exampleBoolean === 'boolean') {
    alert('É um booleano.')
} else {
    alert('Não é um booleano.')
}


/* Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */
let exampleSubtractionFirst = 4
let exampleSubtractionSecond = 2

const subtraction = exampleSubtractionFirst - exampleSubtractionSecond

alert(`O resultado da subtração é: ${subtraction}`)


/*
    Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/
let exampleMultiplicationFirst = 2
let exampleMultiplicationSecond = 2

const multiplication = exampleMultiplicationFirst * exampleMultiplicationSecond

alert(`O resultado da multiplicação é: ${multiplication}`)


/*
    Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/
let exampleDivisionFirst = 10
let exampleDivisionSecond = 5

const division = exampleDivisionFirst / exampleDivisionSecond

alert(`O resultado da divisão é: ${division}`)


/*
    Crie um script que declare uma variável e verifique se o seu valor é um número par. 
    Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/
let itsPair = 2

if (itsPair % 2 === 0) {
    alert('É um número par.')
} else {
    alert('Não é um número par.')
}


/*
    Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
    Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
let isOdd = 3

if (isOdd % 2 === 1) {
    alert('É um número ímpar.')
} else {
    alert('Não é um número ímpar.')
}
