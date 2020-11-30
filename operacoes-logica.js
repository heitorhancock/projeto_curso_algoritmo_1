/*
 passou := falso
       escreval("Nome do aluno:")
       leia(nome)
       escreval("Resultado da primeira prova do aluno:")
       leia(nota1)
       escreval("Resultado da segunda prova do aluno:")
       leia(nota2)

       media := (nota1 + nota2) / 2

       se media >= 6 entao
       passou := verdadeiro
       fimse
       
       se ( passou ) && (media >= 6 || <= 9 ) entao
          escreval("Aprovado:", nome)
       senao
            escreval("Reprovado:", nome)
       fimse
*/
var nome, nota1, nota2, media, passou;
passou = false;
nome = prompt("Nome do aluno:")
nota1 = prompt("Resultado da primeira prova do aluno:")
nota2 = prompt("Resultado da segunda prova do aluno:")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 6)
    passou = true;
 
if(passou && (media >= 6 && media <= 9))
    alert("Aprovado:" + nome)
else
    alert("Reprovado:" + nome)