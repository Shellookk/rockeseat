/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = Number(prompt("Digite o primeiro número:")); 
let numberTwo = Number(prompt("Digite o segundo número:"));

sum = numberOne + numberTwo;
alert("The sum is: " + sum);

sub = numberOne - numberTwo;
alert("The subtraction is: " +  sub)

mul = numberOne * numberTwo;
alert("The multiplication is: "+ mul)

div = numberOne / numberTwo;
alert("The division is: " + div)

restDiv = numberOne % numberTwo;
alert("The rest of division is: " + restDiv);