/*
// Seção de Declarações das variáveis 
// v = valor result = resultado
     v1, v2 , result : real
// op = operação
     op : caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreval("Este programa tem o intuito de calcular dois números com base na operação de sua escolha.")
      escreval("O simbulo(/) é uma divisão comum, já o simbolo(\) é uma divisão inteira.")
      escreval("Depois de digitar o número e a operação aperte a tecla ENTER para continuar.")

      escreval("Digite o primeiro número")
      escreval("Digite uma das seguintes operações: + , - , * , ^ , / , \")
      escreval("Digite o segundo número")

      leia(v1)
      leia(op)
      leia(v2)
      
      se op = "+" entao
         result := v1 + v2
      senao
           se op = "-" entao
           result := v1 - v2
           senao
                se op = "*" entao
                result := v1 * v2
                senao
                     se op = "^" entao
                     result := v1 ^ v2
                     senao
                          se op = "/" entao
                          result := v1 / v2
                                 senao
                                 se op = "\" entao
                                 result := v1 \ v2
                                 fimse
                          fimse
                     fimse
                fimse
           fimse
      fimse
      
      escreval("Resultado = " , result)
*/
// v = valor result = resultado
// op = operação
 
var op, v1, v2 , result;

function apertou() {
v1 = prompt("Digite o primeiro valor: ")
op = prompt("Digite uma das seguintes operações: + , - , * , ** , / ")
v2 = prompt("Digite o segundo valor: ")

    if ( op == "+" ){
result = ( parseInt (v1) + parseInt (v2))
}else if ( op == "-" ){
    result = ( parseInt (v1) - parseInt (v2))
}else if ( op == "*" ){
    result = ( parseInt (v1) * parseInt (v2))
}else if ( op == "**" ){
     result = ( parseInt (v1) ** parseInt (v2))
}else if ( op == "/" ){
     result = ( parseInt (v1) / parseInt (v2))
}

document.getElementById("paragrafo").innerText = "Resultado = " + result
}
