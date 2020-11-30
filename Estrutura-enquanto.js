/*
// result = resultado
   nome: caractere
   idade, vezes, result: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("Digite quantas vezes será verificado a idade: ")
    leia(vezes)
    
    result := 0
    enquanto result < vezes faca
        escreval("Digite seu nome: ")
        leia(nome)
        escreval("Quantos anos você tem: ")
        leia(idade)
    
        se idade >= 18 entao
           escreval(nome, " você é maior de idade")
        senao
           escreval(nome, " desculpe mas você é menor de idade")
        fimse

        result := result + 1
    fimenquanto
*/
// result = resultado
var nome, idade, vezes, result;

function apertou() {
    vezes = prompt("Digite quantas vezes será verificado a idade: ")
    result = 0
    while (result < vezes) {
        nome = prompt("Digite seu nome: ")
        idade = prompt("Quantos anos você tem: ")
    
        if (idade >= 18)    
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade"
        else
            document.getElementById("paragrafo").innerText = nome + " desculpe mas você é menor de idade" 
        result++
    }
}