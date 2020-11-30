/*
 saida : caractere
      valor1, valor2 : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     repita
           escreval("Digite o primeiro valor: ")
           leia(valor1)
           escreval("Digite o segundo valor: ")
           leia(valor2)
           escreval("Resultado = " , valor1 + valor2)
           escreval("Deseja sair? S/N")
           leia(saida)
     ate saida <> "N"
*/

var saida, valor1, valor2;
function apertou() {
    do{   
        valor1 = prompt("Digite o primeiro valor: ")
        valor2 = prompt("Digite o segundo valor: ")           
        document.getElementById("paragrafo").innerText = "Resultado = " + ( parseInt (valor1) + parseInt (valor2))
        saida = prompt("Deseja sair? S/N")
    } while(saida != "S")
}