/* 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof` */

let character = Number(prompt("Digite um caractere qualquer: "));

if (character != Number(character)){
    alert("Não é um número!");
}else{
    alert("É um número");
}