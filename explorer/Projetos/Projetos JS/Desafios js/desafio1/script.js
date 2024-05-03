/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [X] Digitar dois números;

- [X]  A soma dos dois números;
- [X]  A subtração dos dois números;
- [X]  A multiplicação dos dois números;
- [X]  A divisão dos dois números;
- [X]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [X]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [X]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/ 

let numberOne = Number(prompt("Digite o primeiro Número: ")) ;
let numberTwo = Number(prompt("Digite o segundo Número"));

sum = numberOne + numberTwo;
alert(`A soma é: ${sum}`);

sub = numberOne - numberTwo;
alert(`A subtração é: ${sub}`);

mul = numberOne * numberTwo;
alert(`A multiplicação é: ${mul}`);

div = numberOne / numberTwo;
alert(`A divisão é: ${div}`);

restdiv = numberOne % numberTwo;
alert(`O resto é: ${restdiv}`);


if (numberOne == numberTwo){
    alert("Os números são iguais!");
}else{
    alert("Os números são diferentes!");
}


if (restdiv !=0){
    alert(`A soma dos dois números é impar!`);
}
else{
    alert("A soma dos dois números  é par!");
}