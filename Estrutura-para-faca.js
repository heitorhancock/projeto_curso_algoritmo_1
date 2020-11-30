/*
// v = valor result = fatorial   X = qunatidade de vezes gerado no bloco

    v1, result, X: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Digite o número para calcuar o fatorial: ")
    leia(v1)

    result := 1
    para X de 1 ate v1 faca
         result := result * X
    fimpara
    
    escreval("Resultado =" , result)
*/
// v = valor result = fatorial   X = qunatidade de vezes gerado no bloco

function apertou() {
    var v1, result, X;

    v1 = prompt("Digite o número para calcuar o fatorial: ")

    result = 1
    for ( X = 1; X <= v1; X++) {
    result = (parseInt (result) * parseInt (X)) 
    }

    document.getElementById("paragrafo").innerText = "Resultado = " + result
}
