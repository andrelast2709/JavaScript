// EXERCÍCIO 06 | MÓDULO 1
// Objetivo: usar operadores aritméticos e parênteses para calcular uma média correta.

const nota1 = 7;
const nota2 = 8;
const nota3 = 9;

// Tarefa 1: declare uma const chamada "media" que calcule a média das três notas
//         acima. Use PARÊNTESES para somar as três notas antes de dividir por 3.
//         Sem os parênteses corretos, o resultado sai errado!
const media = (nota1 + nota2 + nota3) / 3;

// Tarefa 2: use console.log() com template string para mostrar:
//         "A média é: X" (troque X pelo valor da variável media).
console.log(` A média é : ${media}`);


// Tarefa 3: declare uma const chamada "celsius" com uma temperatura (ex.: 28).
const celsius = 31;

// Tarefa 4: declare uma const chamada "fahrenheit" que calcule a conversão usando
//         a fórmula: celsius * 1.8 + 32
const fahrenheit = celsius * 1.8 + 32;

// Tarefa 5: use console.log() para mostrar o valor de "fahrenheit".
console.log(fahrenheit);


// Tarefa 6 (desafio): use o operador % (resto da divisão) para descobrir se
//         a nota1 é um número par ou ímpar, e mostre true ou false no console.
console.log(nota1 % 2 );
