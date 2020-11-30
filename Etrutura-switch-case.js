var op, v1, v2 , result;

function apertou() {
v1 = prompt("Digite o primeiro valor: ")
op = prompt("Digite uma das seguintes operações: + , - , * , ** , / ")
v2 = prompt("Digite o segundo valor: ")

    switch (op) {
        case "+":
            result = ( parseInt (v1) + parseInt (v2))   
            break;
        case "-":
            result = ( parseInt (v1) - parseInt (v2))   
            break;
        case "/":
            result = ( parseInt (v1) / parseInt (v2))   
            break;
        case "*":
            result = ( parseInt (v1) * parseInt (v2))   
            break;
        case "**":
            result = ( parseInt (v1) ** parseInt (v2))   
            break;
    }
document.getElementById("paragrafo").innerText = "Resultado = " + result 
}