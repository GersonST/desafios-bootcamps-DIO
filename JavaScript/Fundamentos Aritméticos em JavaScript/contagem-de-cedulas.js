/*Desafios
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

  */

let valor = parseInt(gets());

var resto100
var resto50
var resto20
var resto10
var resto5
var resto2
var resto1
var nota100
var nota50
var nota20
var nota10
var nota5
var nota2
var nota1

console.log(valor)
 
resto100 = valor % 100;

nota100 = (valor - resto100)/100;

console.log(nota100 + " nota(s) de R$ 100,00")

resto50 = resto100 % 50;

nota50 = (resto100 - resto50)/50;

console.log(nota50 + " nota(s) de R$ 50,00")

resto20 = resto50 % 20;

nota20 = (resto50 - resto20)/20;

console.log(nota20 + " nota(s) de R$ 20,00")

resto10 = resto20 % 10;

nota10 = (resto20 - resto10)/10;

console.log(nota10 + " nota(s) de R$ 10,00")

resto5 = resto10 % 5;

nota5 = (resto10 - resto5)/5;

console.log(nota5 + " nota(s) de R$ 5,00")


resto2 = resto5 % 2;

nota2 = (resto5 - resto2)/2;

console.log(nota2 + " nota(s) de R$ 2,00")

resto1 = resto2 % 1;

nota1 = (resto2 - resto1)/1;

console.log(nota1 + " nota(s) de R$ 1,00")